import { useState, useRef } from 'react';
import { supabase } from '../lib/supabase';
import { Upload, X, Image, Video, Loader2 } from 'lucide-react';

type FileWithPreview = {
  file: File;
  preview: string;
  id: string;
};

type UploadedFile = {
  file: File;
  category: string;
  description: string;
};

const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
const ALLOWED_VIDEO_TYPES = ['video/mp4', 'video/quicktime', 'video/webm'];
const MAX_FILE_SIZE = 100 * 1024 * 1024;

export default function FileUpload({ onUploadComplete }: { onUploadComplete: () => void }) {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<{ [key: string]: number }>({});
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): string | null => {
    const isImage = ALLOWED_IMAGE_TYPES.includes(file.type);
    const isVideo = ALLOWED_VIDEO_TYPES.includes(file.type);

    if (!isImage && !isVideo) {
      return `${file.name}: Invalid file type. Only images (JPEG, PNG, GIF, WebP) and videos (MP4, MOV, WebM) are allowed.`;
    }

    if (file.size > MAX_FILE_SIZE) {
      return `${file.name}: File size exceeds 100MB limit.`;
    }

    return null;
  };

  const handleFiles = (newFiles: FileList | null) => {
    if (!newFiles) return;

    const validFiles: FileWithPreview[] = [];
    const errors: string[] = [];

    Array.from(newFiles).forEach((file) => {
      const error = validateFile(file);
      if (error) {
        errors.push(error);
      } else {
        const preview = URL.createObjectURL(file);
        validFiles.push({
          file,
          preview,
          id: Math.random().toString(36).substring(7),
        });
      }
    });

    if (errors.length > 0) {
      setError(errors.join('\n'));
    } else {
      setError('');
    }

    setFiles((prev) => [...prev, ...validFiles]);
  };

  const removeFile = (id: string) => {
    setFiles((prev) => {
      const file = prev.find((f) => f.id === id);
      if (file) URL.revokeObjectURL(file.preview);
      return prev.filter((f) => f.id !== id);
    });
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleUpload = async () => {
    if (files.length === 0) return;

    setUploading(true);
    setError('');
    const progress: { [key: string]: number } = {};

    try {
      const BUCKET_NAME = 'portfolio-media';

      for (const { file, id } of files) {
        progress[id] = 0;
        setUploadProgress({ ...progress });

        const timestamp = Date.now();
        const sanitizedName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
        const storagePath = `${timestamp}_${sanitizedName}`;

        progress[id] = 30;
        setUploadProgress({ ...progress });

        const { data: uploadData, error: uploadError } = await supabase.storage
          .from(BUCKET_NAME)
          .upload(storagePath, file, {
            cacheControl: '3600',
            upsert: false,
          });

        if (uploadError) throw uploadError;

        progress[id] = 70;
        setUploadProgress({ ...progress });

        const { error: dbError } = await supabase.from('portfolio_files').insert({
          filename: file.name,
          storage_path: uploadData.path,
          file_type: file.type,
          file_size: file.size,
          category: 'uncategorized',
          description: null,
        });

        if (dbError) throw dbError;

        progress[id] = 100;
        setUploadProgress({ ...progress });
      }

      files.forEach((f) => URL.revokeObjectURL(f.preview));
      setFiles([]);
      setUploadProgress({});
      onUploadComplete();
    } catch (err: any) {
      setError(err.message || 'Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div
        className={`relative border-2 border-dashed rounded-lg p-8 transition-colors ${
          dragActive
            ? 'border-blue-500 bg-blue-500/10'
            : 'border-gray-700 hover:border-gray-600 bg-gray-900/50'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*,video/*"
          onChange={(e) => handleFiles(e.target.files)}
          className="hidden"
        />
        <div className="text-center">
          <Upload className="w-12 h-12 text-gray-500 mx-auto mb-4" />
          <p className="text-gray-300 mb-2">
            Drag and drop your images or videos here, or
          </p>
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors disabled:opacity-50"
          >
            Browse Files
          </button>
          <p className="text-xs text-gray-500 mt-4">
            Supported: JPEG, PNG, GIF, WebP, MP4, MOV, WebM (Max 100MB)
          </p>
        </div>
      </div>

      {error && (
        <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg text-red-400 text-sm whitespace-pre-line">
          {error}
        </div>
      )}

      {files.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">
            Files to Upload ({files.length})
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {files.map((item) => (
              <div key={item.id} className="relative group">
                <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
                  {item.file.type.startsWith('image/') ? (
                    <img
                      src={item.preview}
                      alt={item.file.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Video className="w-12 h-12 text-gray-500" />
                    </div>
                  )}
                  {uploadProgress[item.id] !== undefined && (
                    <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                      <div className="text-white text-center">
                        <Loader2 className="w-8 h-8 animate-spin mx-auto mb-2" />
                        <div className="text-sm">{uploadProgress[item.id]}%</div>
                      </div>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => removeFile(item.id)}
                  disabled={uploading}
                  className="absolute -top-2 -right-2 p-1 bg-red-600 hover:bg-red-700 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-50"
                >
                  <X className="w-4 h-4" />
                </button>
                <p className="mt-1 text-xs text-gray-400 truncate">{item.file.name}</p>
              </div>
            ))}
          </div>
          <button
            onClick={handleUpload}
            disabled={uploading}
            className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {uploading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <Upload className="w-5 h-5" />
                Upload {files.length} {files.length === 1 ? 'File' : 'Files'}
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
