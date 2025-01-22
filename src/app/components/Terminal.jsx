"use client";

import { useEffect, useRef } from 'react';
import { Terminal } from '@xterm/xterm';
import '@xterm/xterm/css/xterm.css';
import { useRouter } from 'next/navigation';
import projects from '../data/Project'; // Import the project data

const TerminalComponent = () => {
  const terminalRef = useRef(null);
  const router = useRouter(); // Initialize the router
  let userInput = '';

  useEffect(() => {
    const term = new Terminal({
      cursorBlink: true,
      theme: {
        background: '#401219', 
        foreground: '#dcdcdc', // Light gray text
        cursor: '#dcdcdc', // Light gray cursor
        selectionBackground: '#4c4c4c', // Medium gray selection background
      },
    });

    term.open(terminalRef.current);
    term.writeln('Welcome to my portfolio! 🎉');
    term.writeln('Type "help" for available commands.');
    term.write('\x1b[38;5;46mdura@dura:~$ \x1b[0m'); // Show the prompt initially in green color

    term.onData((data) => {
      if (data === '\r') {
        // User presses Enter
        const command = userInput.trim();
        if (command) {
          term.writeln(''); // Move to the next line
          if (command === 'help') {
            term.writeln('Available commands: help, about, projects, clear, exit');
          } else if (command === 'about') {
            term.writeln('My name is Duresa Guye AKA Dura. This is my portfolio showcasing my work and projects.');
          } else if (command === 'projects') {
            // Generate project list with styling
            projects.forEach((project, index) => {
              term.writeln(`\x1b[1;34m${index + 1}. ${project.title}\x1b[0m`);
               
            
              term.writeln(`   \x1b[1;34mDescription:\x1b[0m ${project.description}`);
              term.writeln(`   \x1b[1;34mTech Stack:\x1b[0m ${project.techStack.join(', ')}`);
              term.writeln(`   \x1b[1;34mLive Demo:\x1b[0m ${project.link}`);
              term.writeln(`   \x1b[1;34mGitHub:\x1b[0m ${project.github}`);
              term.writeln('');
            });
          } else if (command === 'clear') {
            term.clear();
          } else if (command === 'exit') {
            window.location.href = '/'; // Navigate to the home page
          } else {
            term.writeln(`'${command}' is not a recognized command.`);
          }
        }
        userInput = ''; // Clear the input buffer
        term.write('\x1b[38;5;46mdura@dura:~$ \x1b[0m'); // Show the prompt again in green color
      } else if (data === '\u007F') {
        // Handle backspace
        if (userInput.length > 0) {
          userInput = userInput.slice(0, -1);
          term.write('\b \b'); // Remove last character from terminal display
        }
      } else {
        // Add character to the input buffer
        userInput += data;
        term.write(data); // Display the typed character
      }
    });

    return () => {
      term.dispose();
    };
  }, [router]);

  return <div ref={terminalRef} style={{ height: '400px', width: '100%' }} />;
};

export default TerminalComponent;