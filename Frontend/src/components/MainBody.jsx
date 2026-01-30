import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useFetchFileQuery } from '../redux/api/fileApi';

const MainBody = () => {
  const { data, isLoading, isError, refetch } = useFetchFileQuery({ page: 1, limit: 20 });
  const files = data?.files || [];

  useEffect(() => {
    console.log(files);
  }, [files]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 font-mono overflow-hidden pt-10 lg:pt-4 pb-16">
      {/* Glassmorphism background overlay */}
      <div className="absolute inset-0 bg-white/5 "></div>

      {/* Floating gradient orbs for depth */}
      <div className="absolute -top-20 -left-20 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-purple-600/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-blue-600/20 rounded-full blur-3xl"></div>


      {/* Page Content */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-28 sm:pt-32 lg:pt-40 px-4 text-center">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
          Welcome to Your PrevioQ
        </h1>
        <p className="text-gray-300 text-sm sm:text-lg lg:text-xl max-w-md sm:max-w-xl lg:max-w-2xl mb-10">
          Explore resources, upload your own, and find everything you need for your studies.
        </p>

        {/* Resource Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl px-4 mb-12">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-gray-200 hover:scale-105 transform transition">
            <h2 className="text-xl font-bold mb-2">PYQs</h2>
            <p className="text-sm">Find previous year questions for your exams.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-gray-200 hover:scale-105 transform transition">
            <h2 className="text-xl font-bold mb-2">Notes</h2>
            <p className="text-sm">Access study notes shared by peers.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-gray-200 hover:scale-105 transform transition">
            <h2 className="text-xl font-bold mb-2">Resources</h2>
            <p className="text-sm">Upload and explore helpful study materials.</p>
          </div>
        </div>

        {/* File List */}
        <div className="w-full max-w-5xl px-4 mt-12">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-8">
            📂 Uploaded Files
          </h2>

          {isLoading && <p className="text-gray-400">Loading files...</p>}
          {isError && <p className="text-red-400">Failed to load files.</p>}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {files.map((file) => {
              const extension = file.filename.split('.').pop().toUpperCase();

              return (
                <div
                  key={file._id}
                  className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 flex flex-col justify-between shadow-lg"
                >
                  {/* File Icon + Name */}
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold text-sm sm:text-base">
                      {extension}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-blue-300 break-words whitespace-normal">
                        {file.filename}
                      </h3>
                      <p className="text-sm text-gray-400">by {file.uploader}</p>
                    </div>
                  </div>

                  {/* Tags Section */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(file.tags || ["Exam", "Notes", "Important"]).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 text-purple-200 border border-purple-400/30"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Preview Section */}
                  <div className="mb-4">
                    {extension === "PDF" ? (
                      <iframe
                        src={`https://previoq-backend.onrender.com/api/files/${file._id}`} // ✅ proxy route
                        width="100%"
                        height="200px"
                        className="rounded-lg border border-gray-700"
                        title={file.filename}
                      ></iframe>
                    ) : extension === "PNG" || extension === "JPG" || extension === "JPEG" ? (
                      <img
                        src={file.url}
                        alt={file.filename}
                        className="rounded-lg max-h-48 object-contain mx-auto"
                      />
                    ) : (
                      <p className="text-gray-400 text-sm">Preview not available</p>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 mt-auto">
                    <a
                      href={file.url}
                      download={file.filename}
                      className="flex-1 px-3 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition text-center"
                    >
                      ⬇ Download
                    </a>
                    <a
                      href={extension === "PDF"
                        ? `https://previoq-backend.onrender.com/api/files/${file._id}`
                        : file.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition text-center"
                    >
                      👁 Open
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBody;