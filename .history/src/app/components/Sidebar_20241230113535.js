import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="flex flex-col p-4 bg-gray-800 text-white w-64 h-full">
      {/* Social Media Icons */}
      <div className="mb-6">
        <div className="flex flex-col items-center space-y-3">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            <FaLinkedin size={28} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-black">
            <FaGithub size={28} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
            <FaTwitter size={28} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
            <FaFacebook size={28} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-600">
            <FaInstagram size={28} />
          </a>
        </div>
      </div>

      {/* Explorer Section */}
      <div className="flex flex-col space-y-2">
        <h3 className="text-sm font-semibold text-gray-400">Explorer</h3>
        <ul className="space-y-1">
          <li>
            <Link to="/explorer" className="hover:bg-gray-700 p-2 rounded">Home</Link>
          </li>
          <li>
            <Link to="/explorer/projects" className="hover:bg-gray-700 p-2 rounded">Projects</Link>
          </li>
          <li>
            <Link to="/explorer/notes" className="hover:bg-gray-700 p-2 rounded">Notes</Link>
          </li>
        </ul>
      </div>

      {/* Portfolio Section */}
      <div className="flex flex-col space-y-2 mt-6">
        <h3 className="text-sm font-semibold text-gray-400">Portfolio</h3>
        <ul className="space-y-1">
          <li>
            <Link to="/portfolio" className="hover:bg-gray-700 p-2 rounded">Web Development</Link>
          </li>
          <li>
            <Link to="/portfolio/graphics" className="hover:bg-gray-700 p-2 rounded">Graphics</Link>
          </li>
          <li>
            <Link to="/portfolio/mobile" className="hover:bg-gray-700 p-2 rounded">Mobile Apps</Link>
          </li>
        </ul>
      </div>

      {/* Additional Sections */}
      <div className="flex flex-col space-y-2 mt-6">
        <h3 className="text-sm font-semibold text-gray-400">Additional</h3>
        <ul className="space-y-1">
          <li>
            <Link to="/contact" className="hover:bg-gray-700 p-2 rounded">Contact</Link>
          </li>
          <li>
            <Link to="/settings" className="hover:bg-gray-700 p-2 rounded">Settings</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
