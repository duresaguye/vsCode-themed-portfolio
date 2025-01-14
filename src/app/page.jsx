"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Illustration from './components/Illustration';
import styled, { keyframes } from 'styled-components';

const titles = [
  "Full Stack  Developer",
  "Data Science Enthusiast ",
 
];

const typewriter = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blink = keyframes`
  50% { border-color: transparent; }
`;

const colorChange = keyframes`
  0% { color: #FF6B6B; }    /* Vibrant Coral */
  50% { color: #FFD93D; }   /* Bright Yellow */
  100% { color: #6BCB77; }  /* Green Accent */
`;

const AnimatedTitle = styled.span`
  animation: ${colorChange} 4s infinite ease-in-out;
`;

const TypewriterEffect = styled.span`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid #fff;
  animation: ${typewriter} 2.5s steps(40) 1s 1 normal both, ${blink} 600ms steps(40) infinite normal;
`;

export default function HomePage() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 4000); // Change title every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen  ">
      <div className="text-center max-w-3xl">
        <h1 className="text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-teal-400">
          Duresa Guye
        </h1>
        <h2 className="text-2xl font-light mb-8 relative">
          <AnimatedTitle>{titles[currentTitleIndex]}</AnimatedTitle>
          <TypewriterEffect />
        </h2>
        <div className="flex justify-center gap-6">
          <Link href="/projects">
            <button className="bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold shadow-lg transform transition hover:scale-105 hover:shadow-blue-400/70">
              View Work
            </button>
          </Link>
          <Link href="/contact">
            <button className="bg-transparent text-blue-500 py-3 px-6 rounded-lg font-semibold border-2 border-blue-500 shadow-lg transform transition hover:scale-105 hover:bg-blue-500 hover:text-white">
              Contact Me
            </button>
          </Link>
        </div>
        <Illustration className="mt-12 mx-auto max-w-sm" />
      </div>
    </div>
  );
}
