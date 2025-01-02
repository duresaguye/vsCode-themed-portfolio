import React from "react";

function Footer() {
  return (
    <div className="flex items-center justify-between bg-gray-800 text-gray-300 px-4 py-2 text-sm border-t border-gray-700">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <span>⚡ Running: React.js</span>
      </div>

      {/* Center Section */}
      <div className="flex items-center space-x-6">
        <span>File: index.js</span>
        <span>Formatter: Prettier</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <span>Language: JavaScript</span>
        <span>Indent: 2 Spaces</span>
        <span>Encoding: UTF-8</span>
        <span>Git: Main</span>
      </div>
    </div>
  );
}

export default Footer;