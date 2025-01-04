import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import ChevronRight from './icons/ChevronRight';

const explorerItems = [
  { name: 'home.jsx', path: '/', icon: 'react_icon.svg' },
  { name: 'about.html', path: '/about', icon: 'html_icon.svg' },
  { name: 'contact.css', path: '/contact', icon: 'css_icon.svg' },
  { name: 'projects.js', path: '/projects', icon: 'js_icon.svg' },
  { name: 'articles.json', path: '/articles', icon: 'json_icon.svg' },
  { name: 'github.md', path: '/github', icon: 'markdown_icon.svg' },
];

const Explorer = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(true);

  return (
    <div className="bg-gray-800 w-[18vw] text-gray-200 font-sans border-r border-gray-700">
      <p className="px-3 py-2 text-sm font-light uppercase tracking-wider border-b border-gray-700">
        Explorer
      </p>
      <div>
        <button
          className="flex items-center w-full px-2 py-2 text-sm font-semibold uppercase cursor-pointer"
          onClick={() => setPortfolioOpen(!portfolioOpen)}
          aria-expanded={portfolioOpen}
        >
          <ChevronRight
            className={`transition-transform ${
              portfolioOpen ? 'rotate-90' : ''
            }`}
          />
          <span className="ml-2">Portfolio</span>
        </button>
        <div className={`${portfolioOpen ? 'block' : 'hidden'} py-2`}>
          {explorerItems.map((item) => (
            <Link href={item.path} key={item.name} passHref legacyBehavior>
              <a className="flex items-center px-4 py-1.5 text-sm hover:bg-gray-700 rounded">
                <Image
                  src={`/${item.icon}`}
                  alt={item.name}
                  height={18}
                  width={18}
                />
                <span className="ml-2">{item.name}</span>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explorer;
