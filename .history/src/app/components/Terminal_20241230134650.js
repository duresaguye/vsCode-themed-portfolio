// components/Terminal.js
import { useEffect, useRef } from 'react';
import { Terminal } from '@xterm/xterm';
import '@xterm/xterm/css/xterm.css';


const TerminalComponent = () => {
  const terminalRef = useRef(null);

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
          term.clear();
        } else {
          term.writeln(`'${input}' is not a recognized command.`);
        }
      }
    });

    return () => {
      term.dispose();
    };
  }, []);

  return <div ref={terminalRef} style={{ height: '400px', width: '100%' }} />;
};

export default TerminalComponent;
