import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 font-mono overflow-hidden px-4">
      
      {/* Glassmorphism background overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-lg"></div>

      {/* Floating gradient orbs for depth */}
      <div className="absolute -top-20 -left-20 w-48 h-48 sm:w-72 sm:h-72 bg-purple-600/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-600/20 rounded-full blur-3xl"></div>

      {/* Content */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6 z-10 text-center">
        PrevioQ
      </h1>

      <p className="text-gray-300 text-base sm:text-lg lg:text-xl mb-4 z-10 text-center max-w-md sm:max-w-xl">
        Find all the PYQs and resources all in one place.
      </p>

      <p className="text-xs sm:text-sm text-green-400 mb-8 z-10">
        🚀 No login required
      </p>
        
      <Link to='user' className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition z-10 text-sm sm:text-base">
        Get Started
      </Link>
    </div>
  )
}

export default LandingPage