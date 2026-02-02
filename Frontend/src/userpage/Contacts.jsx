import React from "react";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const contacts = [
  { name: "ShivKarthik", email: "nairshivkarthik4@gmail.com", insta: "matt_murdock456" },
  { name: "Aditya", email: "adityabarge093@gmail.com", insta: "adityabarge01" },
  { name: "Hitesh", email: "hitechbhoir@gmail.com", insta: null },
  { name: "Priyansh", email: "harshpriyansh2@gmail.com", insta: "_priyansh_h20" },
  { name: "Sanchit", email: "zenorbits29@gmail.com", insta: "zen_orbits" },
];

const Contacts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-200 px-6 py-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-12">
          📇 Our Team Contacts
        </h1>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="w-full max-w-sm flex flex-col justify-between h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg hover:scale-105 transform transition duration-300"
            >
              {/* Name */}
              <h2 className="text-2xl font-bold text-blue-300 mb-4">{contact.name}</h2>

              {/* Contact Info */}
              <div className="space-y-3 text-left flex-1">
                <p className="flex items-center text-gray-300 break-words">
                  <MdEmail className="mr-2 text-red-400" />
                  <a href={`mailto:${contact.email}`} className="hover:underline">
                    {contact.email}
                  </a>
                </p>

                {contact.insta && (
                  <p className="flex items-center text-gray-300">
                    <FaInstagram className="mr-2 text-pink-400" />
                    <a
                      href={`https://instagram.com/${contact.insta}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {contact.insta}
                    </a>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Closing */}
        <p className="mt-16 text-gray-400 text-sm">
          Reach out to us anytime — we’re here to collaborate, share, and grow together 🚀
        </p>
      </div>
    </div>
  );
};

export default Contacts;