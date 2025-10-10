import { useState, useEffect } from 'react';
import { supabase, PortfolioFile } from '../lib/supabase';
import { X, Play, Loader2 } from 'lucide-react';

export default function Portfolio() {
  const [files, setFiles] = useState<PortfolioFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedFile, setSelectedFile] = useState<PortfolioFile | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    loadFiles();

    const subscription = supabase
      .channel('portfolio_files_changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'portfolio_files' }, () => {
        loadFiles();
      })
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const loadFiles = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('portfolio_files')
      .select('*')
      .order('display_order', { ascending: true })
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

  const getFileUrl = (path: string) => {
    const { data } = supabase.storage.from('portfolio-media').getPublicUrl(path);
    return data.publicUrl;
  };

  const filteredFiles = filterCategory === 'all' ? files : files.filter((f) => f.category === filterCategory);

  return (
    <section id="portfolio" className="relative bg-[#0a0a0a] py-40 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-[1800px] mx-auto px-8 lg:px-20">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-16 lg:mb-32 gap-8">
          <div>
            <div className="text-xs font-mono tracking-[0.5em] text-zinc-600 mb-6">002/005 — PORTFOLIO</div>
            <h2 className="text-6xl lg:text-[12rem] font-black leading-none tracking-tighter">
              <span className="text-white">PORT</span>
              <span style={{ WebkitTextStroke: '2px white', WebkitTextFillColor: 'transparent' }}>FOLIO</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-4 py-2 text-xs font-mono border-2 transition-all ${
                filterCategory === 'all'
                  ? 'border-amber-500 bg-amber-500/10 text-amber-500'
                  : 'border-zinc-800 text-zinc-500 hover:border-zinc-600'
              }`}
            >
              ALL ({files.length})
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-4 py-2 text-xs font-mono border-2 transition-all uppercase ${
                  filterCategory === cat
                    ? 'border-amber-500 bg-amber-500/10 text-amber-500'
                    : 'border-zinc-800 text-zinc-500 hover:border-zinc-600'
                }`}
              >
                {cat} ({files.filter((f) => f.category === cat).length})
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-32">
            <Loader2 className="w-12 h-12 text-amber-500 animate-spin" />
          </div>
        ) : filteredFiles.length === 0 ? (
          <div className="text-center py-32">
            <div className="text-zinc-600 font-mono text-sm mb-4">NO FILES FOUND</div>
            <p className="text-zinc-500 text-sm">
              {filterCategory === 'all'
                ? 'Upload files using the Admin Dashboard to populate your portfolio.'
                : `No files in category "${filterCategory}".`}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFiles.map((file) => {
              const isVideo = file.file_type.startsWith('video/');
              const fileUrl = getFileUrl(file.storage_path);

              return (
                <div
                  key={file.id}
                  className="group relative aspect-[4/5] border-2 border-zinc-900 overflow-hidden cursor-pointer hover:border-amber-500 transition-all duration-300"
                  onClick={() => setSelectedFile(file)}
                >
                  {isVideo ? (
                    <div className="relative w-full h-full bg-zinc-900">
                      <video
                        src={fileUrl}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        muted
                        loop
                        playsInline
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border-2 border-white/20 group-hover:scale-110 transition-transform">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={fileUrl}
                      alt={file.description || file.filename}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      loading="lazy"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="text-xs font-mono text-zinc-500 mb-2 uppercase">{file.category}</div>
                      {file.description && (
                        <div className="text-sm text-white font-medium line-clamp-2">{file.description}</div>
                      )}
                    </div>
                  </div>

                  {file.is_featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-amber-500 text-black text-xs font-mono font-bold">
                      FEATURED
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {selectedFile && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedFile(null)}
        >
          <button
            onClick={() => setSelectedFile(null)}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div
            className="max-w-7xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedFile.file_type.startsWith('video/') ? (
              <video
                src={getFileUrl(selectedFile.storage_path)}
                controls
                autoPlay
                className="w-full h-full max-h-[80vh] object-contain"
              />
            ) : (
              <img
                src={getFileUrl(selectedFile.storage_path)}
                alt={selectedFile.description || selectedFile.filename}
                className="w-full h-full max-h-[80vh] object-contain"
              />
            )}

            {selectedFile.description && (
              <div className="mt-6 text-center">
                <div className="text-xs font-mono text-zinc-500 mb-2 uppercase">{selectedFile.category}</div>
                <p className="text-white text-lg">{selectedFile.description}</p>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="absolute bottom-8 left-0 right-0 px-8 lg:px-20">
        <div className="max-w-[1800px] mx-auto flex items-center justify-between text-xs font-mono text-zinc-700">
          <span>SCROLL FOR MORE →</span>
          <span>{filteredFiles.length} {filteredFiles.length === 1 ? 'ITEM' : 'ITEMS'} SHOWN</span>
        </div>
      </div>
    </section>
  );
}
