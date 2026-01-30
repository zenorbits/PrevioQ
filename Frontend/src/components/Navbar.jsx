import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { inputSearch } from '../redux/features/searchFilter';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const searchValue = useSelector((state) => state.searchFilter.input); // Redux state
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(searchValue);
  }, [searchValue]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-md border-b border-white/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Brand Name */}
          <div className="flex-shrink-0 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            PrevioQ
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 mx-6">
            <input
              type="text"
              value={searchValue} // ✅ controlled by Redux state
              onChange={(e) => dispatch(inputSearch(e.target.value))} // ✅ updates Redux state
              placeholder="Search resources, PYQs..."
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Desktop Options */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to='/upload'>
              <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow hover:scale-105 transform transition">
                Upload Resources
              </button>
            </Link>
            <button className="px-4 py-2 text-gray-200 hover:text-white transition">About</button>
            <button className="px-4 py-2 text-gray-200 hover:text-white transition">Contact</button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-200 hover:text-white focus:outline-none"
            >
              {menuOpen ? '✖' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-2">
        <input
          type="text"
          value={searchValue} // ✅ controlled by Redux state
          onChange={(e) => dispatch(inputSearch(e.target.value))} // ✅ updates Redux state
          placeholder="Search resources..."
          className="w-full px-4 py-2 rounded-lg bg-white/20 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Mobile Menu Options */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to='/upload'>
            <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow hover:scale-105 transform transition">
              Upload Resources
            </button>
          </Link>
          <button className="w-full px-4 py-2 text-gray-200 hover:text-white transition">About</button>
          <button className="w-full px-4 py-2 text-gray-200 hover:text-white transition">Contact</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;