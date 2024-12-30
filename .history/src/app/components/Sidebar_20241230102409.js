'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Sidebar() {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(true); // Portfolio dropdown open by default

  return (
    <div className="bg-gray-900 text-gray-300 w-64 h-full p-4">
      <h3 className="text-blue-400 mb-4 text-lg font-bold">Explorer</h3>
      <ul className="space-y-3">
        {/* React Folder */}
        <li className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer">
          <span>📁</span>
          <span>React</span>
        </li>

        {/* Portfolio Folder */}
        <li>
          <div
            className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer"
            onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
          >
            <span>{isPortfolioOpen ? '📂' : '📁'}</span>
            <span>Portfolio</span>
          </div>
          {/* Dropdown */}
          {isPortfolioOpen && (
            <ul className="ml-6 mt-2 space-y-2">
              <li>
                <Link href="/portfolio/aboutme" className="flex items-center space-x-2 hover:text-blue-400">
                  <span>📄</span>
                  <span>aboutme.tsx</span>
                </Link>
              </li>
              <li>
                <Link href="/portfolio/projects" className="flex items-center space-x-2 hover:text-blue-400">
                  <span>📄</span>
                  <span>projects.tsx</span>
                </Link>
              </li>
              <li>
                <Link href="/portfolio/contact" className="flex items-center space-x-2 hover:text-blue-400">
                  <span>📄</span>
                  <span>contact.tsx</span>
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Public Folder */}
        <li className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer">
          <span>📂</span>
          <span>Public</span>
        </li>
      </ul>
    </div>
  );
}
