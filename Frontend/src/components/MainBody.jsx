import React from 'react'
import Navbar from '../components/Navbar'

const MainBody = () => {
    return (
        <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 font-mono overflow-hidden pt-10 lg:pt-4">

            {/* Glassmorphism background overlay */}
            <div className="absolute inset-0 bg-white/5 "></div>

            {/* Floating gradient orbs for depth */}
            <div className="absolute -top-20 -left-20 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-purple-600/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-blue-600/20 rounded-full blur-3xl"></div>

            {/* Navbar */}

            {/* Page Content */}
            <div className="relative z-10 flex flex-col items-center justify-center pt-28 sm:pt-32 lg:pt-40 px-4 text-center">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
                    Welcome to Your PrevioQ
                </h1>
                <p className="text-gray-300 text-sm sm:text-lg lg:text-xl max-w-md sm:max-w-xl lg:max-w-2xl mb-10">
                    Explore resources, upload your own, and find everything you need for your studies.
                </p>

                {/* Resource Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl px-4">
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
            </div>
        </div>
    )
}

export default MainBody