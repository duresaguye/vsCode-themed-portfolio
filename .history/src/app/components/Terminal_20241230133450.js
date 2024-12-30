// components/Terminal.js
import { useState, useEffect } from "react";

const Terminal = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([
    "Welcome to my portfolio! 🎉",
    "Type a command to explore. Type 'help' for available commands."
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [typingEffect, setTypingEffect] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const command = input.trim().toLowerCase();
      let newOutput = [...output];

      // Simulate command execution and output display
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
      setCommandHistory([...commandHistory, `dura@portfolio:~$ ${command}`]);
      setOutput(newOutput);
      setInput(""); // Clear input after command is processed
      setTypingEffect(""); // Reset typing effect after command execution
    }
  };

  useEffect(() => {
    // Simulate typing effect for terminal output
    if (output.length > 0 && typingEffect !== output[output.length - 1]) {
      let i = 0;
      const text = output[output.length - 1];
      const interval = setInterval(() => {
        setTypingEffect((prev) => prev + text[i]);
        i++;
        if (i >= text.length) clearInterval(interval);
      }, 50); // Adjust speed of typing
    }
  }, [output]);

  return (
    <div className="bg-gray-900 text-gray-300 rounded-lg mt-4 p-4">
      <div className="flex space-x-2 mb-2">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>
      
      {/* Terminal Output */}
      <div className="terminal-output mb-4">
        {output.map((line, index) => (
          <p key={index}>
            <span>{line}</span>
          </p>
        ))}

        <p className="text-green-500">{`dura@portfolio:~$ ${input}`}</p>
      </div>
      
      {/* Input Field */}
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
