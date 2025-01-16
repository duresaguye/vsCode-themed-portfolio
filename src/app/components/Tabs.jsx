"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Tab = ({ icon, filename, path, borderColor }) => {
  const pathname = usePathname();
  const isActive = pathname === path;


  return (
    <Link href={path} legacyBehavior>
      <div
        className={`flex items-center py-2 px-5  text-gray-200  text-sm font-sans cursor-pointer 
        ${isActive ? `border-t-2 ${borderColor} bg-tab-active-bg` : ''}`}
      >
        <Image src={icon} alt={filename} height={18} width={18} />
        <p className="ml-1">{filename}</p>
      </div>
    </Link>
  );
};

export default Tab;