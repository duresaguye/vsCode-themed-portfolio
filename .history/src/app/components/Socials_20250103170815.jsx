import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'; 
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import FilesIcon from './icons/FilesIcon';
import GithubIcon from './icons/GithubIcon';
import CodeIcon from './icons/CodeIcon';
import PencilIcon from './icons/PencilIcon';
import MailIcon from './icons/MailIcon';
import AccountIcon from './icons/AccountIcon';
import SettingsIcon from './icons/SettingsIcon';
import styles from '../styles/Sidebar.module.css';

function Socials() {
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
  return (
   
     <div className="space-y-4 mt-5">
     
     <div className="flex-col space-x-6">
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
     <div className={styles.sidebar}>
     <div className={styles.sidebarBottom}>
        {sidebarBottomItems.map(({ Icon, path }) => (
          <div className={styles.iconContainer}>
            <Link href={path} key={path}>
              <Icon
                fill={
                  router.pathname === path
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className={styles.icon}
              />
            </Link>
          </div>
        ))}
      </div>
     </div>
    

   </div>
  )
}

export default Socials