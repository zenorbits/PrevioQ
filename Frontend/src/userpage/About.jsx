import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-200 px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
          About PrevioQ
        </h1>

        {/* Intro */}
        <p className="text-lg sm:text-xl text-gray-300 mb-10">
          PrevioQ is your one-stop platform for academic resources. Whether you’re preparing for exams, 
          revising with notes, or exploring previous year questions (PYQs), PrevioQ makes it easy to 
          access, upload, and share study materials with peers.
        </p>

        {/* Features Section */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">✨ Key Features</h2>
          <ul className="space-y-3 text-left">
            <li>📂 <span className="font-semibold">Upload & Share Resources:</span> Easily upload PDFs, images, and notes for others to access.</li>
            <li>🔍 <span className="font-semibold">Smart Search:</span> Find files quickly using keywords in filenames, tags, or uploader names.</li>
            <li>📖 <span className="font-semibold">Previous Year Questions (PYQs):</span> Access exam papers to prepare more effectively.</li>
            <li>📝 <span className="font-semibold">Notes & Study Materials:</span> Browse peer-shared notes and resources.</li>
            <li>⚡ <span className="font-semibold">Responsive Design:</span> Optimized for both desktop and mobile with a clean, modern UI.</li>
          </ul>
        </div>

        {/* Tech Stack Section */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">🛠 Tech Stack (MERN)</h2>
          <p className="text-gray-300 mb-6">
            PrevioQ is built using the powerful <span className="font-semibold">MERN stack</span>, 
            ensuring scalability, performance, and a smooth developer experience:
          </p>
          <ul className="space-y-3 text-left">
            <li>🌐 <span className="font-semibold">MongoDB:</span> NoSQL database for storing files, metadata, and user information.</li>
            <li>⚙️ <span className="font-semibold">Express.js:</span> Backend framework for building APIs and handling requests.</li>
            <li>🖥 <span className="font-semibold">React.js:</span> Frontend library for creating interactive and responsive user interfaces.</li>
            <li>🚀 <span className="font-semibold">Node.js:</span> Runtime environment powering the backend with JavaScript.</li>
          </ul>
        </div>

        {/* Closing */}
        <p className="mt-12 text-gray-400 text-sm">
          Built with ❤️ using MERN, PrevioQ is designed to make learning collaborative, accessible, and efficient.
        </p>
      </div>
    </div>
  );
};

export default About;   