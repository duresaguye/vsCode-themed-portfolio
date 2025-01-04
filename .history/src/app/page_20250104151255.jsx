"use client";
import Link from 'next/link';
import Illustration from './components/Illustration';

export default function HomePage() {
  return (
    <>
      <div className="flex justify-center h-[75vh] flex-col relative">
        <div className="text-[5rem] font-montserrat leading-[1.1] text-bg-text absolute z-10">
          {/* Background text (this will be visible only on larger screens) */}
        </div>
        <div className="z-20 flex text-accent-color justify-between items-center">
          <div className="text-center">
            <h1 className=" text-5xl font-medium mb-2">Duresa Guye</h1>
            <h6 className="max-w-max text-[#eee] text-2xl font-light mb-12 relative">
              Full Stack Web Developer
              <span className="absolute top-0 right-0 bottom-0 left-0 bg-main-bg animate-typewriter"></span>
              <span className="ml-[0.4rem] w-[0.125em]  animate-typewriter animate-blink"></span>
            </h6>
            <Link href="/projects">
              <button className=" text-[#eee] font-semibold py-[0.5rem] px-[1rem] mr-[1.5rem] border-none cursor-pointer hover:shadow-lg">
                View Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="text-[#eee] font-semibold py-[0.5rem] px-[1rem] border-2 border-accent-color bg-transparent cursor-pointer hover:shadow-lg">
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
