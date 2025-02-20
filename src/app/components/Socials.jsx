import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa';

import AccountIcon from './icons/AccountIcon';
import SettingsIcon from './icons/SettingsIcon';

const sidebarBottomItems = [
  { Icon: AccountIcon, path: '/about' },
  { Icon: SettingsIcon, path: '/settings' },
];

const Sidebar = () => {
  const router = useRouter();

  return (
    <aside className=" flex flex-col justify-between h-[calc(100vh-55px)] w-[4.5vw] min-w-[40px] md:w-[6vw] lg:w-[4vw] sm:w-[10vw]">
      {/* Social Links */}
      <div className="flex-col space-x-6 ml-4 mt-4">
        <a href="https://www.linkedin.com/in/duresa-guye-5aba5625a/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/duresaguye" target="_blank" rel="noopener noreferrer" className="hover:text-black">
          <FaGithub size={24} />
        </a>
        <a href="https://x.com/dure_guye" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
          <FaTwitter size={24} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
          <FaFacebook size={24} />
        </a>
        <a href="https://www.instagram.com/dura_guye/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
          <FaInstagram size={24} />
        </a>
        <a href="https://t.me/Icon_dura" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
          <FaTelegram size={24} />
        </a>
      </div>

      {/* Sidebar Bottom */}
      <div className="flex flex-col space-y-2">
        {sidebarBottomItems.map(({ Icon, path }) => (
         <Link
         href={path}
         key={path}
         className={`flex items-center justify-center w-full h-12 cursor-pointer ${
           router.pathname === path ? 'bg-gray-700 border-l-4 border-blue-500' : 'hover:bg-gray-700'
         }`}
       >
         <Icon
           style={{
             fill: router.pathname === path ? 'rgb(225, 228, 232)' : 'rgb(106, 115, 125)',
           }}
           className="h-12 w-12 p-2"
         />
       </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
