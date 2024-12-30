"use client";

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="bg-gray-800 flex space-x-4 px-4 py-2 rounded-t-md">
      {['About', 'Projects', 'Contact'].map((tab) => (
        <button
          key={tab}
          className={`flex items-center px-6 py-2.5 text-sm font-sans cursor-pointer rounded-t-md transition-all
            ${activeTab === tab ? 
              'border-t-4 border-blue-400 bg-gray-900 text-white' : 
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

export default Tabs;
