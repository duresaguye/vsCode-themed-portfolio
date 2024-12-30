'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiSettings, FiFolder } from 'react-icons/fi'; // Use folder and settings icons

// Custom TSX file icon (SVG format)
const TsxIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="20"
    width="20"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="text-blue-400"
  >
    <path d="M12.333 0H3.667A3.667 3.667 0 000 3.667v12.666A3.667 3.667 0 003.667 20h12.666A3.667 3.667 0 0020 16.333V3.667A3.667 3.667 0 0016.333 0H12.333zM10 14h2v2h-2v-2zm0-4h2v2h-2V10zm0-4h2v2h-2V6z" />
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
                    <TsxIcon /> {/* Custom TSX Icon */}
                    <span>aboutme.tsx</span>
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio/projects" className="flex items-center space-x-2 hover:text-blue-400">
                    <TsxIcon /> {/* Custom TSX Icon */}
                    <span>projects.tsx</span>
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio/contact" className="flex items-center space-x-2 hover:text-blue-400">
                    <TsxIcon /> {/* Custom TSX Icon */}
                    <span>contact.tsx</span>
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
