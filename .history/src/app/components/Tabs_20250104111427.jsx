"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Tab = ({ icon, filename, path }) => {
  const router = useRouter();

  return (
    <Link href={path} legacyBehavior>
      <div
        className={`flex items-center py-2 px-5 bg-tab-bg text-gray-200 border border-tab-border text-sm font-sans cursor-pointer ${router.pathname === path ? 'border-t-2 border-accent-color bg-tab-active-bg' : ''}`}
      >
        <Image src={icon} alt={filename} height={18} width={18} />
        <p className="ml-1">{filename}</p>
      </div>
    </Link>
  );
};

export default Tab;
