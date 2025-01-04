"use Client"
import Link from 'next/link';

import { FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import AccountIcon from './icons/AccountIcon';
import SettingsIcon from './icons/SettingsIcon';
import { useRouter } from 'next/router';
import { useState } from 'react';


const sidebarBottomItems = [
  {
    Icon: AccountIcon,
    path: '/about',
  },
  {
    Icon: SettingsIcon,
    path: '/settings',
  },
];

const Sidebar = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {

    setIsClient(true);  // Update state after mount
  }, []);

  if (!isClient) return null; 
  const router = useRouter();

  return (
    <aside className="bg-gray-800 flex flex-col justify-between w-[4.5vw] min-w-[40px] h-[calc(100vh-55px)]">
      <div className="flex flex-col items-center space-y-6">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
          <FaGithub size={24} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
          <FaTwitter size={24} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
          <FaFacebook size={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
          <FaInstagram size={24} />
        </a>
      </div>

      <div className="flex flex-col items-center space-y-4">
        {sidebarBottomItems.map(({ Icon, path }) => (
          <Link href={path} key={path}>
            <div
              className={`cursor-pointer w-full hover:bg-gray-700 ${
                router.pathname === path ? 'border-l-2 border-accent' : ''
              }`}
            >
              <Icon
                fill={
                  router.pathname === path ? 'rgb(225, 228, 232)' : 'rgb(106, 115, 125)'
                }
                className="h-12 w-12 p-3 mx-auto"
              />
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
