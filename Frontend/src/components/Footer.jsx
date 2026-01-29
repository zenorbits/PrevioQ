import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-300 py-8 pt">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left: Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            PrevioQ
          </h2>
          <p className="text-sm text-gray-400">
            Your study resources, all in one place.
          </p>
        </div>

        {/* Middle: Navigation */}
        <div className="flex space-x-6 text-sm">
          <a href="#pyqs" className="hover:text-blue-400 transition">PYQs</a>
          <a href="#notes" className="hover:text-blue-400 transition">Notes</a>
          <a href="#resources" className="hover:text-blue-400 transition">Resources</a>
          <a href="#upload" className="hover:text-blue-400 transition">Upload</a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex space-x-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="mt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} PrevioQ. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;