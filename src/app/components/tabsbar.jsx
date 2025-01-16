import React from 'react';
import Tab from './Tabs';

const Tabsbar = () => {
  const tabs = [
    { icon: "/react_icon.svg", filename: "Home.jsx", path: "/", borderColor: "border-red-500" },
    { icon: "/react_icon.svg", filename: "About.jsx", path: "/about", borderColor: "border-blue-500" },
    { icon: "/react_icon.svg", filename: "Contact.jsx", path: "/contact", borderColor: "border-green-500" },
    { icon: "/react_icon.svg", filename: "Projects.js", path: "/projects", borderColor: "border-yellow-500" },
    { icon: "/json_icon.svg", filename: "Articles.json", path: "/articles", borderColor: "border-purple-500" },
    { icon: "/markdown_icon.svg", filename: "Github.md", path: "/github", borderColor: "border-pink-500" }
  ];

  return (
    <div className="flex overflow-x-auto bg-tabs-bg sm:w-[78vw] xs:w-[89.5vw]">
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          icon={tab.icon}
          filename={tab.filename}
          path={tab.path}
          borderColor={tab.borderColor}
        />
      ))}
    </div>
  );
};

export default Tabsbar;
