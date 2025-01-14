"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Illustration from './components/Illustration';
import styled, { keyframes } from 'styled-components';

const titles = [
  "Full Stack Web Developer",
  "Data Science & Analytics Enthusiast",
  

];

const typewriter = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blink = keyframes`
  50% { border-color: transparent; }
`;
const colorChange = keyframes`
  0% { color: #ff5733; }    /* Vibrant Red */
  25% { color: #33ff57; }   /* Green */

`;
const AnimatedTitle = styled.span`
  animation: ${colorChange} 3s infinite;
`;

const TypewriterEffect = styled.span`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 0.15em solid #fff;
  animation: ${typewriter} 2s steps(40) 1s 1 normal both, ${blink} 500ms steps(40) infinite normal;
`;

export default function HomePage() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000); // Change title every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex justify-center h-[75vh] flex-col relative">
        <div className="text-[5rem] font-montserrat leading-[1.1] text-bg-text absolute z-10">
          {/* Background text (this will be visible only on larger screens) */}
        </div>
        <div className="z-20 flex text-accent-color justify-between items-center">
          <div className="text-center">
            <h1 className="text-5xl font-medium mb-2">Duresa Guye</h1>
            <h6 className="max-w-max text-[#eee] text-2xl font-light mb-12 relative">
              <AnimatedTitle>{titles[currentTitleIndex]}</AnimatedTitle>
              <TypewriterEffect className="absolute top-0 right-0 bottom-0 left-0 bg-main-bg"></TypewriterEffect>
              <TypewriterEffect className="ml-[0.4rem] w-[0.125em]"></TypewriterEffect>
            </h6>
            <Link href="/projects">
              <button className="font-semibold py-[0.5rem] px-[1rem] mr-[1.5rem] border-none cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,255,0.7),0_0_25px_rgba(0,255,255,0.6),0_0_35px_rgba(0,255,255,0.5)] hover:text-[#00f9ff]">
                View Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="font-semibold py-[0.5rem] px-[1rem] border-2 border-accent-color bg-transparent cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,255,0.7),0_0_25px_rgba(0,255,255,0.6),0_0_35px_rgba(0,255,255,0.5)] hover:text-[#00f9ff]">
                Contact Me
              </button>
            </Link>
          </div>
          <Illustration className="h-[500px] w-[460px]" />
        </div>
      </div>
    </>
  );
}