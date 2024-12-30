// components/Sidebar.js
const Sidebar = () => {
    return (
      <div className="bg-gray-900 text-gray-300 w-64 h-screen p-4">
        <h3 className="text-blue-400 mb-6">Explorer</h3>
        <ul className="space-y-3">
          <li className="hover:text-blue-400 cursor-pointer">📂 About Me</li>
          <li className="hover:text-blue-400 cursor-pointer">📂 Projects</li>
          <li className="hover:text-blue-400 cursor-pointer">📂 Contact</li>
        </ul>
      </div>
    );
  };
  
  export default Sidebar;
  