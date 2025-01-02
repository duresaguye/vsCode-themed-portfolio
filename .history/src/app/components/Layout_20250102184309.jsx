"use client";
import Titlebar from './Titlebar';
import Sidebar from './Sidebar';
import Tabsbar from './tabsbar';
import Footer from './Footer';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const main = document.getElementById('main-editor');
    main.scrollTop = 0;
  }, [router.pathname]);

  return (
    <>
      <Titlebar />
      <div className="flex bg-gray-900">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Tabsbar />
          <main
            id="main-editor"
            className="p-8 sm:p-4 text-gray-200 font-mono flex-1 h-[85vh] overflow-y-auto smooth-scroll scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800"
          >
            {children}
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
