"use client";

import { useEffect, useRef, useState } from 'react';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';
import { useRouter } from 'next/navigation';

const TerminalComponent = () => {
  const terminalRef = useRef(null);
  const [userInput, setUserInput] = useState('');
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    const term = new Terminal({
      cursorBlink: true,
      theme: {
        background: '#1e1e1e',
        foreground: '#ffffff',
        cursor: '#ffffff',
        selectionBackground: '#4c4c4c',
      },
    });

    term.open(terminalRef.current);
    term.writeln('Welcome to my portfolio! 🎉');
    term.writeln('Type "help" for available commands.');
    term.write('dura@dura:~$ '); // Show the prompt initially

    term.onData((data) => {
      if (data === '\r') {
        // When user presses Enter
        const command = userInput.trim();
        if (command) {
          term.writeln(''); // Move to the next line
          if (command === 'help') {
            term.writeln('Available commands: help, about, projects, clear, exit');
          } else if (command === 'about') {
            term.writeln('This is my portfolio showcasing my work and projects.');
          } else if (command === 'projects') {
            term.writeln('1. Project One\n2. Project Two\n3. Project Three');
          } else if (command === 'clear') {
            term.clear();
          } else if (command === 'exit') {
            router.push('/'); // Navigate to the home page
          } else {
            term.writeln(`'${command}' is not a recognized command.`);
          }
        }

        setUserInput(''); // Clear the input buffer
        term.write('dura@dura:~$ '); // Show the prompt again
      } else if (data === '\u007F') {
        // Handle backspace
        if (userInput.length > 0) {
          setUserInput((prev) => prev.slice(0, -1));
          term.write('\b \b'); // Remove last character from terminal display
        }
      } else {
        // Add character to the input buffer
        setUserInput((prev) => prev + data);
        term.write(data); // Display the typed character
      }
    });

    return () => {
      term.dispose();
    };
  }, [userInput, router]);

  return <div ref={terminalRef} style={{ height: '400px', width: '100%' }} />;
};

export default TerminalComponent;
