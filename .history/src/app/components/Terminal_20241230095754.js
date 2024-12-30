// components/Terminal.js
const Terminal = () => {
    return (
      <div className="bg-gray-900 text-gray-300 rounded-lg mt-4 p-4">
        <div className="flex space-x-2 mb-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
        <div>
          <p>Welcome to my portfolio! 🎉</p>
          <p>Type a command to explore.</p>
        </div>
      </div>
    );
  };
  
  export default Terminal;
  