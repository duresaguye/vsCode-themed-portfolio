// components/Terminal.js
import { useEffect, useRef, useState } from 'react';
import { Terminal } from '@xterm/xterm';
import '@xterm/xterm/css/xterm.css';

const TerminalComponent = () => {
  const terminalRef = useRef(null);
  const [userInput, setUserInput] = useState('');
  const [history, setHistory] = useState([]);

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
            term.writeln('Available commands: help, about, projects, clear');
          } else if (command === 'about') {
            term.writeln('This is my portfolio showcasing my work and projects.');
          } else if (command === 'projects') {
            term.writeln('1. Project One\n2. Project Two\n3. Project Three');
          } else if (command === 'clear') {
            term.clear();
            term.writeln('dura@dura:~$ '); // Show prompt after clearing.
          } else {
            term.writeln(`'${command}' is not a recognized command.`);
          }
        }

        setUserInput(''); // Clear the input after executing the command
      } else if (data === '\u007F') {
        // Handle backspace
        setUserInput((prevInput) => prevInput.slice(0, -1));
      } else {
        // Add character to the input buffer
        setUserInput((prevInput) => prevInput + data);
      }

      term.write(data);
    });

    return () => {
      term.dispose();
    };
  }, [userInput]);

  return <div ref={terminalRef} style={{ height: '400px', width: '100%' }} />;
};

export default TerminalComponent;
