// components/Tabs.js
const Tabs = ({ activeTab, setActiveTab }) => {
    return (
      <div className="bg-gray-800 text-gray-300 flex space-x-4 px-4 py-2">
        {['About', 'Projects', 'Contact'].map((tab) => (
          <button
            key={tab}
            className={`${
              activeTab === tab ? 'border-b-2 border-blue-400 text-white' : ''
            } hover:text-blue-400`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    );
  };
  
  export default Tabs;
  