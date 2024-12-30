'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiSettings, FiFolder } from 'react-icons/fi'; // File Folder Icons

export default function Sidebar() {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(true); // Portfolio dropdown open by default
  const [darkMode, setDarkMode] = useState(true); // Theme state

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode); // Tailwind's dark mode toggle
  };

  return (
    <div className="bg-gray-900 text-gray-300 w-64 h-full p-4 flex flex-col justify-between">
      {/* Explorer Section */}
      <div>
        <h3 className="text-blue-400 mb-4 text-lg font-bold">Explorer</h3>
        <ul className="space-y-3">
          {/* React Folder */}
          <li className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer">
            <FiFolder className="text-xl" />
            <span>React</span>
          </li>

          {/* Portfolio Folder */}
          <li>
            <div
              className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer"
              onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
            >
              <FiFolder className="text-xl" />
              <span>Portfolio</span>
            </div>
            {/* Dropdown */}
            {isPortfolioOpen && (
              <ul className="ml-6 mt-2 space-y-2">
                <li>
                  <Link href="/portfolio/aboutme" className="flex items-center space-x-2 hover:text-blue-400">
                    {/* Custom .js SVG Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" className="text-yellow-500">
                      <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                      <path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
                    </svg>
                    <span>About.js</span>
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio/projects" className="flex items-center space-x-2 hover:text-blue-400">
                    {/* Custom .js SVG Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" className="text-yellow-500">
                      <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                      <path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
                    </svg>
                    <span>Projects.js</span>
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio/contact" className="flex items-center space-x-2 hover:text-blue-400">
                    {/* Custom .js SVG Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" className="text-yellow-500">
                      <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                      <path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
                    </svg>
                    <span>Contact.js</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Public Folder */}
          <li className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer">
            <FiFolder className="text-xl" />
            <span>Public</span>
          </li>
        </ul>
      </div>

      {/* Settings Section */}
      <div className="flex items-center justify-between border-t border-gray-700 pt-4">
        <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-400" onClick={toggleTheme}>
          <FiSettings className="text-xl" />
          <span>Settings</span>
        </div>
        <button
          className={`p-1 rounded-full ${
            darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-900'
          }`}
          aria-label="Toggle Theme"
        >
          {darkMode ? '🌙' : '☀️'}
        </button>
      </div>
    </div>
  );
}
