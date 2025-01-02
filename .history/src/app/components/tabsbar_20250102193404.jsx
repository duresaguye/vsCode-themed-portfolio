"use client";
import { useRouter } from 'next/navigation';

const Tabsbar = () => {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div className="bg-gray-800 h-[30px] flex items-center px-2.5 text-white font-sans text-sm border-b border-[#191d20]">
      <p className="px-2.5 cursor-pointer underline" onClick={() => handleNavigation('/home')}>Home</p>    
      <p className="px-2.5 cursor-pointer underline" onClick={() => handleNavigation('/projects')}>Projects</p>
      <p className="px-2.5 cursor-pointer underline" onClick={() => handleNavigation('/about')}>About</p>
      <p className="px-2.5 cursor-pointer underline" onClick={() => handleNavigation('/contact')}>Contact</p>
      <p className="px-2.5 cursor-pointer underline" onClick={() => handleNavigation('/github')}>GitHub</p>
    </div>
  );
};

export default Tabsbar;