import { useState } from 'react';
import AdminAuth from './AdminAuth';
import FileUpload from './FileUpload';
import FileManager from './FileManager';
import { FolderUp, FileText } from 'lucide-react';

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<'upload' | 'manage'>('upload');
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleUploadComplete = () => {
    setRefreshTrigger((prev) => prev + 1);
    setActiveTab('manage');
  };

  return (
    <section id="admin" className="py-20 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Admin Dashboard
        </h2>

        <div className="space-y-8">
          <AdminAuth onAuthChange={setIsAuthenticated} />

          {isAuthenticated && (
            <>
              <div className="flex gap-4 border-b border-gray-800">
                <button
                  onClick={() => setActiveTab('upload')}
                  className={`flex items-center gap-2 px-6 py-3 font-semibold transition-colors ${
                    activeTab === 'upload'
                      ? 'text-blue-500 border-b-2 border-blue-500'
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  <FolderUp className="w-5 h-5" />
                  Upload Files
                </button>
                <button
                  onClick={() => setActiveTab('manage')}
                  className={`flex items-center gap-2 px-6 py-3 font-semibold transition-colors ${
                    activeTab === 'manage'
                      ? 'text-blue-500 border-b-2 border-blue-500'
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  <FileText className="w-5 h-5" />
                  Manage Files
                </button>
              </div>

              <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                {activeTab === 'upload' ? (
                  <FileUpload onUploadComplete={handleUploadComplete} />
                ) : (
                  <FileManager refreshTrigger={refreshTrigger} />
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
