"use client";

const Tab = ({ activeTab, setActiveTab }) => {
  return (
    <div className="bg-gray-900 flex space-x-4 px-4 py-2 rounded-t-md">
      {['Home.jsx', 'About.jsx', 'Projects.jsx', 'Contact.jsx', 'Github.md'].map((tab) => (
        <button
          key={tab}
          className={`flex items-center px-6 py-2.5 text-sm font-sans cursor-pointer rounded-t-md transition-all 
            ${activeTab === tab ? 
              'border-t-2  ' : 
              'border-t-4 border-transparent hover:border-blue-400 hover:bg-gray-700 text-gray-400 hover:text-white'}
            `}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tab;