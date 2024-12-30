// components/Terminal.js
import { useEffect, useRef } from 'react';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';

const TerminalComponent = () => {
  const terminalRef = useRef(null);

  useEffect(() => {
    // Initialize the terminal
    const term = new Terminal({
      cursorBlink: true, // Optional: makes the cursor blink like in a real terminal
      theme: {
        background: '#1e1e1e',
        foreground: '#ffffff',
        cursor: '#ffffff',
        selectionBackground: '#4c4c4c',
      },
    });

    // Attach the terminal to the DOM
    term.open(terminalRef.current);

    // Simulate terminal startup text
    term.writeln('Welcome to my portfolio! 🎉');
    term.writeln('Type "help" for available commands.');
    
    // Handle user input and simulate command execution
    term.onData((data) => {
      const input = data.trim();
      if (input) {
        if (input === 'help') {
          term.writeln('Available commands: help, about, projects, clear');
        } else if (input === 'about') {
          term.writeln('This is my portfolio showcasing my work and projects.');
        } else if (input === 'projects') {
          term.writeln('1. Project One\n2. Project Two\n3. Project Three');
        } else if (input === 'clear') {
          term.clear(); // Clear terminal screen
        } else {
          term.writeln(`'${input}' is not a recognized command.`);
        }
      }
    });

    // Cleanup when the component unmounts
    return () => {
      term.dispose();
    };
  }, []);

  return (
    <div className="terminal-container">
      <div ref={terminalRef} className="xterm-container"></div>
    </div>
  );
};

export default TerminalComponent;
