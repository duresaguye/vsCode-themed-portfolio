import Link from 'next/link';
import Illustration from './components/Illustration'; // Adjust the path if needed

export default function Home() {
  return (
    <div className="flex justify-center items-center h-[75vh] flex-col relative">
      <div className="absolute z-10 text-[5rem] font-[Montserrat] leading-tight text-bg-text">
        <h1>I BUILD</h1>
        <h1>WEBSITES</h1>
      </div>
      <div className="z-20 flex justify-between items-center text-accent-color">
        <div className="flex flex-col items-center">
          <h1 className="text-[#eee] text-3.5xl font-medium mb-2">{/* Name */}Nitin Ranganath</h1>
          <h6 className="text-[#eee] text-1.5xl font-light mb-12 relative">
            {/* Bio */}
            Full Stack Web Developer
            <span className="absolute inset-0 bg-main-bg animate-typewriter duration-[2.5s]"></span>
            <span className="ml-[0.4rem] w-[0.125em] bg-accent-color animate-blink animate-typewriter duration-[2.5s] infinite"></span>
          </h6>
          <div className="flex space-x-6">
            <Link href="/projects">
              <button className="bg-accent-color text-[#eee] font-semibold text-xl py-2 px-4 border-none cursor-pointer hover:shadow-lg">
                View Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="text-[#eee] font-semibold text-xl py-2 px-4 border-2 border-accent-color bg-transparent cursor-pointer hover:shadow-lg">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
        <Illustration className="h-[500px] w-[460px]" />
      </div>
    </div>
  );
}
