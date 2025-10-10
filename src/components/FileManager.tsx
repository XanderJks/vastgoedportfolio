import { useState, useEffect } from 'react';
import { supabase, PortfolioFile } from '../lib/supabase';
import { Trash2, Edit2, Save, X, Image as ImageIcon, Video, Loader2 } from 'lucide-react';

export default function FileManager({ refreshTrigger }: { refreshTrigger: number }) {
  const [files, setFiles] = useState<PortfolioFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({ category: '', description: '' });
  const [filter, setFilter] = useState<string>('all');
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    loadFiles();
  }, [refreshTrigger]);

  const loadFiles = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('portfolio_files')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error loading files:', error);
    } else {
      setFiles(data || []);
      const uniqueCategories = Array.from(new Set(data?.map((f) => f.category) || []));
      setCategories(uniqueCategories);
    }
    setLoading(false);
  };

  const handleDelete = async (file: PortfolioFile) => {
    if (!confirm(`Delete ${file.filename}?`)) return;

    const { error: storageError } = await supabase.storage
      .from('portfolio-media')
      .remove([file.storage_path]);

    if (storageError) {
      alert('Error deleting file from storage: ' + storageError.message);
      return;
    }

    const { error: dbError } = await supabase
      .from('portfolio_files')
      .delete()
      .eq('id', file.id);

    if (dbError) {
      alert('Error deleting file record: ' + dbError.message);
    } else {
      setFiles((prev) => prev.filter((f) => f.id !== file.id));
    }
  };

  const startEdit = (file: PortfolioFile) => {
    setEditingId(file.id);
    setEditForm({
      category: file.category,
      description: file.description || '',
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditForm({ category: '', description: '' });
  };

  const saveEdit = async (id: string) => {
    const { error } = await supabase
      .from('portfolio_files')
      .update({
        category: editForm.category,
        description: editForm.description || null,
      })
      .eq('id', id);

    if (error) {
      alert('Error updating file: ' + error.message);
    } else {
      setFiles((prev) =>
        prev.map((f) =>
          f.id === id
            ? { ...f, category: editForm.category, description: editForm.description || null }
            : f
        )
      );
      setEditingId(null);
    }
  };

  const getFileUrl = (path: string) => {
    const { data } = supabase.storage.from('portfolio-media').getPublicUrl(path);
    return data.publicUrl;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const filteredFiles = filter === 'all' ? files : files.filter((f) => f.category === filter);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Manage Files ({files.length})</h2>
        <div className="flex items-center gap-2">
          <label className="text-gray-400 text-sm">Filter:</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All ({files.length})</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat} ({files.filter((f) => f.category === cat).length})
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredFiles.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          {filter === 'all' ? 'No files uploaded yet.' : `No files in category "${filter}".`}
        </div>
      ) : (
        <div className="grid gap-4">
          {filteredFiles.map((file) => {
            const isEditing = editingId === file.id;
            const isVideo = file.file_type.startsWith('video/');

            return (
              <div
                key={file.id}
                className="bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-gray-700 transition-colors"
              >
                <div className="flex gap-4">
                  <div className="w-32 h-32 bg-gray-800 rounded-lg overflow-hidden flex-shrink-0">
                    {isVideo ? (
                      <div className="w-full h-full flex items-center justify-center">
                        <Video className="w-12 h-12 text-gray-600" />
                      </div>
                    ) : (
                      <img
                        src={getFileUrl(file.storage_path)}
                        alt={file.filename}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-semibold truncate">{file.filename}</h3>
                        <p className="text-sm text-gray-500">
                          {formatFileSize(file.file_size)} • {new Date(file.created_at).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        {isEditing ? (
                          <>
                            <button
                              onClick={() => saveEdit(file.id)}
                              className="p-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                              title="Save"
                            >
                              <Save className="w-4 h-4" />
                            </button>
                            <button
                              onClick={cancelEdit}
                              className="p-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                              title="Cancel"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              onClick={() => startEdit(file)}
                              className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                              title="Edit"
                            >
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDelete(file)}
                              className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                              title="Delete"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </>
                        )}
                      </div>
                    </div>

                    {isEditing ? (
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm text-gray-400 mb-1">Category</label>
                          <input
                            type="text"
                            value={editForm.category}
                            onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="e.g., web-design, photography"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-400 mb-1">Description</label>
                          <textarea
                            value={editForm.description}
                            onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows={2}
                            placeholder="Optional description..."
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500">Category:</span>
                          <span className="text-sm text-gray-300 px-2 py-1 bg-gray-800 rounded">
                            {file.category}
                          </span>
                        </div>
                        {file.description && (
                          <p className="text-sm text-gray-400 line-clamp-2">{file.description}</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
