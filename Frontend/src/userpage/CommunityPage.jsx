import React from "react";
import { FaDiscord } from "react-icons/fa"; // install react-icons if not already: npm install react-icons

const CommunityPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-200 px-6 py-12">
            <div className="max-w-4xl mx-auto text-center">
                {/* Title */}
                <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-6">
                    Join the PrevioQ Community
                </h1>

                {/* Intro */}
                <p className="text-lg sm:text-xl text-gray-300 mb-10">
                    Learning is better together! Our community is a space where students
                    can <span className="font-semibold">ask doubts</span>,{" "}
                    <span className="font-semibold">clear doubts</span>, share resources,
                    and support each other in their academic journey.
                </p>

                {/* Features */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 mb-12">
                    <h2 className="text-2xl font-bold text-blue-400 mb-4">🤝 What You’ll Find</h2>
                    <ul className="space-y-3 text-left">
                        <li>💬 Ask questions and get answers from peers.</li>
                        <li>📘 Share notes, PYQs, and study tips.</li>
                        <li>⚡ Collaborate on projects and exam prep.</li>
                        <li>🌍 Connect with learners across different subjects.</li>
                    </ul>
                </div>

                {/* Discord Link */}
                <div className="flex flex-col items-center">
                    <p className="text-gray-300 mb-4 text-lg">
                        Be part of the conversation on our Discord server:
                    </p>
                    <a
                        href="https://discord.gg/fVeQmfksx" // replace with your actual invite link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                    >
                        <FaDiscord size={28} />
                        <span className="font-medium">Join Us on Discord</span>
                    </a>
                </div>

                {/* Closing */}
                <p className="mt-12 text-gray-400 text-sm">
                    Together, we learn faster, understand deeper, and achieve more 🚀
                </p>
            </div>
        </div>
    );
};

export default CommunityPage;