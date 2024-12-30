"use client";

import { useEffect, useRef, useState } from 'react';
import { Terminal } from '@xterm/xterm';
import '@xterm/xterm/css/xterm.css';
import { useRouter } from 'next/navigation';


const TerminalComponent = () => {
  const terminalRef = useRef(null);
  const [userInput, setUserInput] = useState('');
  const [history, setHistory] = useState([]);
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
    term.writeln('dura@dura:~$ '); // Show the prompt initially.

    term.onData((data) => {
      if (data === '\r') {
        // When user presses Enter
        const command = userInput.trim();
        if (command) {
          setHistory((prevHistory) => [...prevHistory, `dura@dura:~$ ${command}`]);

          if (command === 'help') {
            term.writeln('Available commands: help, about, projects, clear, exit');
          } else if (command === 'about') {
            term.writeln('This is my portfolio showcasing my work and projects.');
          } else if (command === 'projects') {
            term.writeln('1. Project One\n2. Project Two\n3. Project Three');
          } else if (command === 'clear') {
            term.clear();
            term.writeln('dura@dura:~$ '); // Show prompt after clearing.
          } else if (command === 'exit') {
            router.push('/'); // Navigate to the home page
          } else {
            term.writeln(`'${command}' is not a recognized command.`);
          }
        }

        setUserInput(''); // Clear the input after executing the command
        term.writeln('dura@dura:~$ '); // Show the prompt again after entering a command.
      } else if (data === '\u007F') {
        // Handle backspace
        setUserInput((prevInput) => prevInput.slice(0, -1));
        term.write('\b \b'); // Properly handle backspace in terminal
      } else {
        // Add character to the input buffer
        setUserInput((prevInput) => prevInput + data);
        term.write(data); // Show the typed character in the terminal
      }
    });

    return () => {
      term.dispose();
    };
  }, [userInput, router]); // Include router as a dependency

  return <div ref={terminalRef} style={{ height: '400px', width: '100%' }} />;
};

export default TerminalComponent;
