// components/Terminal.js
import { useState } from "react";

const Terminal = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState(["Welcome to my portfolio! 🎉", "Type a command to explore."]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const command = input.trim().toLowerCase();
      let newOutput = [...output];
      
      // Process the command
      if (command === "help") {
        newOutput.push("Available commands: help, about, clear, projects, contact");
      } else if (command === "about") {
        newOutput.push("This is my portfolio, showcasing my work and projects.");
      } else if (command === "clear") {
        newOutput = []; // Clear terminal output
      } else if (command === "projects") {
        newOutput.push("1. Project One\n2. Project Two\n3. Project Three");
      } else if (command === "contact") {
        newOutput.push("Contact me at: email@example.com");
      } else {
        newOutput.push(`'${command}' is not a recognized command.`);
      }

      // Update state with the new output
      setOutput(newOutput);
      setInput(""); // Clear input after command is processed
    }
  };

  return (
    <div className="bg-gray-900 text-gray-300 rounded-lg mt-4 p-4">
      <div className="flex space-x-2 mb-2">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>
      <div className="terminal-output mb-4">
        {output.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      <input
        type="text"
        className="bg-transparent text-gray-300 border-none w-full focus:outline-none"
        placeholder="Type a command..."
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleCommand}
      />
    </div>
  );
};

export default Terminal;
