"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Illustration from './components/Illustration';
import styled, { keyframes } from 'styled-components';

const titles = [
  "Full Stack Web Developer",
  "Data Scientist",
  "Data Analyst",
  "Ethicist"
];

const typewriter = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blink = keyframes`
  50% { border-color: transparent; }
`;

const colorChange = keyframes`
  0% { color: #ff5733; }
  25% { color: #33ff57; }
  50% { color: #3357ff; }
  75% { color: #ff33a1; }
  100% { color: #ff5733; }
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

const Button = styled.button`
  font-semibold;
  py: 0.5rem;
  px: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(1);
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.7), 0 0 25px rgba(0, 255, 255, 0.6), 0 0 35px rgba(0, 255, 255, 0.5);
    color: #00f9ff;
  }
`;

const PrimaryButton = styled(Button)`
  background-color: var(--button-bg);
  color: var(--button-text);
  margin-right: 1.5rem;
`;

const SecondaryButton = styled(Button)`
  border: 2px solid var(--accent-color);
  background-color: transparent;
  color: var(--accent-color);
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
            <Link href="/projects" passHref>
              <PrimaryButton>View Work</PrimaryButton>
            </Link>
            <Link href="/contact" passHref>
              <SecondaryButton>Contact Me</SecondaryButton>
            </Link>
          </div>
          <Illustration className="h-[500px] w-[460px]" />
        </div>
      </div>
    </>
  );
}