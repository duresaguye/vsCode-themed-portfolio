import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import styles from '../styles/Sidebar.module.css';
import AccountIcon from './icons/AccountIcon';
import SettingsIcon from './icons/SettingsIcon';

const sidebarBottomItems = [
  { Icon: AccountIcon, path: '/about' },
  { Icon: SettingsIcon, path: '/settings' },
];

const Sidebar = () => {
  const router = useRouter();

  return (
    <aside className={styles.sidebar}>
      {/* Social Links */}
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

      {/* Sidebar Bottom */}
      <div className={styles.sidebarBottom}>
        {sidebarBottomItems.map(({ Icon, path }) => (
          <Link href={path} key={path} className={styles.iconContainer}>
            <Icon
              style={{
                fill: router.pathname === path ? 'rgb(225, 228, 232)' : 'rgb(106, 115, 125)',
              }}
              className={styles.icon}
            />
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
