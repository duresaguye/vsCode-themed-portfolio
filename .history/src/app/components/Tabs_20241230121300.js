"use client";

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="bg-gray-800 text-gray-300 flex space-x-4 px-4 py-2">
      {['About', 'Projects', 'Contact'].map((tab) => (
        <button
          key={tab}
          className={`flex items-center px-5 py-2.5 text-sm font-sans cursor-pointer border 
            ${activeTab === tab ? 'border-t-2 text-white' : 'border-gray-600 bg-gray-800 hover:text-blue-400'}
            `}
          onClick={() => setActiveTab(tab)}
        >
          <p className="ml-1">{tab}</p>
        </button>
      ))}
    </div>
  );
};

export default Tabs;
  