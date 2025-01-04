"use client";
import Titlebar from './Titlebar';
import Sidebar from './Sidebar';
import Tabsbar from './tabsbar';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Layout = ({ children, activeTab, setActiveTab }) => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const main = document.getElementById('main-editor');
      main.scrollTop = 0;
    }
  }, [router.pathname, isMounted]);

  return (
    <>
      <Titlebar />
      <div className="flex ">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex flex-col w-full">
          <Tabsbar activeTab={activeTab} setActiveTab={setActiveTab} />
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