"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

const titles = [
  "Full Stack Developer",
  "Data Science Enthusiast",
];

export default function HomePage() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 4000); // Change title every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center  mt-20">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold ">Duresa Guye</h1>
        <h2 className="mt-4 text-2xl font-semibold ">{titles[currentTitleIndex]}</h2>
        <div className="mt-6 space-x-4">
          <Link href="/projects">
            <button className="px-6 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition duration-300">
              View Work
            </button>
          </Link>
          <Link href="/contact">
            <button className="px-6 py-2 text-white bg-green-500 rounded-full hover:bg-green-600 transition duration-300">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
