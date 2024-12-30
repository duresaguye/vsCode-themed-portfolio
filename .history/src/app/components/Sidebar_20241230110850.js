'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiSettings, FiFolder } from 'react-icons/fi'; // Use folder and settings icons

// Custom JS file icon (SVG format)
const JsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="20"
    width="20"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="text-yellow-500"
  >
    <path d="M8.5 0H3.25C2.56 0 2 0.56 2 1.25v17.5C2 19.44 2.56 20 3.25 20h13.5c0.69 0 1.25-0.56 1.25-1.25V1.25C18 0.56 17.44 0 16.75 0H8.5zM7.5 17.5H4v-1.5h3.5v1.5zm1-3H4V13h4.5v1.5zM7.5 9.5H4V8h3.5v1.5zm10.5-5.5v14H3v-14h15z" />
  </svg>
);

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
                    <JsIcon /> {/* Custom JS Icon */}
                    <span>aboutme.js</span>
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio/projects" className="flex items-center space-x-2 hover:text-blue-400">
                    <JsIcon /> {/* Custom JS Icon */}
                    <span>projects.js</span>
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio/contact" className="flex items-center space-x-2 hover:text-blue-400">
                    <JsIcon /> {/* Custom JS Icon */}
                    <span>contact.js</span>
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
