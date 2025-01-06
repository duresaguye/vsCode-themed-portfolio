"use client";
import Link from 'next/link';
import Illustration from './components/Illustration';

export default function HomePage() {
  return (
    <>
      <div className="flex justify-center h-[75vh] flex-col relative animate-fade-in">
        <div className="text-[5rem] font-montserrat leading-[1.1] text-bg-text absolute z-10">
          {/* Background text (this will be visible only on larger screens) */}
        </div>
        <div className="z-20 flex text-accent-color justify-between items-center">
          <div className="text-center">
            <h1 className="text-5xl font-medium mb-2 animate-slide-up">Duresa Guye</h1>
            <h6 className="max-w-max text-[#eee] text-2xl font-light mb-12 relative animate-slide-up delay-200">
              <span className="animate-typewriter">Full Stack Web Developer</span>
              <span className="ml-[0.4rem] w-[0.125em] animate-blink"></span>
              <br />
              <span className="animate-typewriter animate-delay-500">Data Science & Analytics Enthusiast</span>
              <span className="ml-[0.4rem] w-[0.125em] animate-blink"></span>
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

          <Illustration className="h-[500px] w-[460px] animate-slide-up delay-400" />
        </div>
      </div>
    </>
  );
}
