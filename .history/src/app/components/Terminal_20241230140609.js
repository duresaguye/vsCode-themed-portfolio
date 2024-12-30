"use client";
import { useEffect, useRef, useState } from 'react';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';

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
    term.write('dura@dura:~$ '); // Show the prompt initially.

    term.onData((data) => {
      if (data === '\r') {
        // When user presses Enter
        const command = userInput.trim();
        if (command) {
          setHistory((prevHistory) => [...prevHistory, `dura@dura:~$ ${command}`]);

          if (command === 'help') {
            term.writeln('\r\nAvailable commands: help, about, projects, clear');
          } else if (command === 'clear') {
            term.clear();
          } else {
            term.writeln(`\r\nCommand not found: ${command}`);
          }

          setUserInput('');
        }
        term.write('\r\ndura@dura:~$ ');
      } else if (data === '\u007F') {
        // Handle backspace
        if (userInput.length > 0) {
          setUserInput(userInput.slice(0, -1));
          term.write('\b \b');
        }
      } else {
        setUserInput(userInput + data);
        term.write(data);
      }
    });

    return () => term.dispose();
  }, [userInput]);

  return <div ref={terminalRef} className="w-full h-full" />;
};

export default TerminalComponent;