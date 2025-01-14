import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import ChevronRight from './icons/ChevronRight';

const explorerItems = [
  { name: 'Home.jsx', path: '/', icon: 'react_icon.svg' },
  { name: 'About.jsx', path: '/about', icon: 'react_icon.svg' },
  { name: 'Contact.jsx', path: '/contact', icon: 'react_icon.svg' },
  { name: 'Projects.jsx', path: '/projects', icon: 'react_icon.svg' },
  { name: 'Articles.json', path: '/articles', icon: 'json_icon.svg' },
  { name: 'Github.md', path: '/github', icon: 'markdown_icon.svg' },
];

const Explorer = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(true);

  return (
    <div className="hidden sm:block w-[18vw] text-gray-200 font-sans border-r border-gray-700">
      <p className="px-3 py-2 text-sm font-light uppercase tracking-wider border-b border-gray-700">
        Explorer
      </p>
      <div>
      <button
  style={{
    all: 'unset',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '0.5rem',
    fontSize: '0.875rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    cursor: 'pointer',
  }}
  onClick={() => setPortfolioOpen(!portfolioOpen)}
  aria-expanded={portfolioOpen}
>
  <ChevronRight
    className={`transition-transform ${portfolioOpen ? 'rotate-90' : ''}`}
  />
  <span style={{ marginLeft: '0.5rem' }}>Portfolio</span>
</button>

        <div className={`${portfolioOpen ? 'block' : 'hidden'} py-2`}>
          {explorerItems.map((item) => (
            <Link href={item.path} key={item.name} passHref legacyBehavior>
              <a className="flex items-center px-4 py-1.5 text-sm hover:bg-gray-700 rounded">
                <Image
                  src={`/${item.icon}`}
                  alt={item.name}
                  height={19}
                  width={19}
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
