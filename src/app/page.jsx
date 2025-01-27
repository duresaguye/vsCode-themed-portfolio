"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

const titles = [
  "🌟 Full Stack Developer",
  "📊 Data Science Enthusiast",
  "🚀 Lifelong Learner",
];

const funFacts = [
  "👩‍💻 Ada Lovelace is hailed as the first programmer in history.",
  "🐍 Python is named after Monty Python, not the snake!",
  "🌐 JavaScript was created in just 10 days by Brendan Eich.",
  "📱 Your smartphone is more powerful than the computers used for the Apollo 11 mission.",
  "🎨 You can use emojis as variable names in JavaScript and Python!"
];

export default function HomePage() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);

    const factInterval = setInterval(() => {
      setCurrentFactIndex((prevIndex) => (prevIndex + 1) % funFacts.length);
    }, 5000); // Change fun fact every 5 seconds

    return () => {
      clearInterval(titleInterval);
      clearInterval(factInterval);
    };
  }, []);

  return (
    <div className="mt-34 p-4">
      <div className="flex items-center flex-col justify-center">
        {/* Welcome Message */}
        <h3 className="text-xl font-bold mb-4">
          <span className="mr-2">👋</span> Hey, welcome to my portfolio!
        </h3>
        {/* Name */}
        <h1 className="text-5xl font-bold tracking-tight">
          I am Duresa Guye
        </h1>
        {/* Dynamic Titles */}
        <h2 className="mt-10 text-2xl font-semibold animate-pulse">
          {titles[currentTitleIndex]}
        </h2>
        {/* Buttons */}
        <div className="mt-24 space-x-4">
          <Link href="/projects">
            <button className="px-6 py-2 text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-full shadow-lg hover:shadow-xl transition duration-300">
              View Work
            </button>
          </Link>
          <Link href="/contact">
            <button className="px-6 py-2 text-white bg-gradient-to-r from-green-500 to-green-700 rounded-full shadow-lg hover:shadow-xl transition duration-300">
              Contact Me
            </button>
          </Link>
        </div>
        {/* Add See My CV Button */}
        <div className="mt-4">
          <Link href="/cv">
            <button className="px-6 py-2 text-white bg-gradient-to-r from-purple-500 to-purple-700 rounded-full shadow-lg hover:shadow-xl transition duration-300">
              See My CV
            </button>
          </Link>
        </div>
      </div>

      {/* Fun Facts Section positioned in the top-right corner */}
      <div className="hidden md:block absolute top-96 right-0 mt-96 mr-4 text-center">
        <h3 className="text-2xl font-bold mb-4">
          💻 Fun Facts About Coding
        </h3>
        <p className="text-lg italic">
          {funFacts[currentFactIndex]}
        </p>
      </div>
    </div>
  );
}
