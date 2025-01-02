"use client";
import { useState } from "react";
import Socials from "./Socials";

export default function Sidebar({ activeTab, setActiveTab }) {
  const [sections, setSections] = useState({
    portfolio: true,
    blog: true,
  });

  const toggleSection = (section) => {
    setSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const renderSection = (title, isOpen, toggle, items) => (
    <div>
      <div
        className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer"
        onClick={toggle}
      >
        <span>{title}</span>
      </div>
      {isOpen && (
        <ul className="ml-6 mt-2 space-y-2">
          {items.map(({ name, action, icon }) => (
            <li
              key={name}
              className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer"
              onClick={action}
            >
              {icon}
              <span>{name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <div className="bg-gray-900 text-gray-300 p-4 flex flex-col sm:flex-row justify-between">
      <div className="sm:mr-2 mb-4 sm:mb-0">
        <Socials />
      </div>
      <div className="flex-1 sm:block hidden">
        <h3 className="mb-4 text-lg font-bold">Explorer</h3>
        <ul className="space-y-3">
          {renderSection("Blog", sections.blog, () => toggleSection("blog"), [
            {
              name: "Blog",
              action: () => setActiveTab("Home"),
              icon: <YourBlogIcon />, // Replace with actual icon
            },
          ])}
          {renderSection("Portfolio", sections.portfolio, () => toggleSection("portfolio"), [
            {
              name: "Home.jsx",
              action: () => setActiveTab("Home.jsx"),
              icon: <YourHomeIcon />, // Replace with actual icon
            },
            // Add more items here
          ])}
        </ul>
      </div>
    </div>
  );
}
