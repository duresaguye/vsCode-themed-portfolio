// components/Sidebar.js
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-900 text-white w-64 h-full">
      {/* Social Media Icons */}
      <div className="flex flex-col items-center space-y-4 mb-8">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          <FaLinkedin size={28} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
          <FaGithub size={28} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <FaTwitter size={28} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
          <FaFacebook size={28} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
          <FaInstagram size={28} />
        </a>
      </div>

      {/* Explorer Section */}
      <div className="w-full text-left">
        <h3 className="text-xs text-gray-400 font-semibold mb-2">Explorer</h3>
        <ul className="space-y-2">
          <li>
            <Link href="/home">
              <a className="block p-2 rounded hover:bg-gray-800 hover:text-white">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a className="block p-2 rounded hover:bg-gray-800 hover:text-white">Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="block p-2 rounded hover:bg-gray-800 hover:text-white">About</a>
            </Link>
          </li>
        </ul>
      </div>

      {/* Portfolio Section */}
      <div className="w-full text-left mt-6">
        <h3 className="text-xs text-gray-400 font-semibold mb-2">Portfolio</h3>
        <ul className="space-y-2">
          <li>
            <Link href="/web-development">
              <a className="block p-2 rounded hover:bg-gray-800 hover:text-white">Web Development</a>
            </Link>
          </li>
          <li>
            <Link href="/mobile-apps">
              <a className="block p-2 rounded hover:bg-gray-800 hover:text-white">Mobile Apps</a>
            </Link>
          </li>
          <li>
            <Link href="/graphics">
              <a className="block p-2 rounded hover:bg-gray-800 hover:text-white">Graphics</a>
            </Link>
          </li>
        </ul>
      </div>

      {/* Additional Sections */}
      <div className="w-full text-left mt-6">
        <h3 className="text-xs text-gray-400 font-semibold mb-2">Additional</h3>
        <ul className="space-y-2">
          <li>
            <Link href="/contact">
              <a className="block p-2 rounded hover:bg-gray-800 hover:text-white">Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/settings">
              <a className="block p-2 rounded hover:bg-gray-800 hover:text-white">Settings</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
