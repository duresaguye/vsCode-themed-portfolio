"use client";
import Sidebar from './Sidebar';
import Tabs from './Tabs';
import AboutMe from '../about/page'
import Projects from '../portfolio/project';
import Contact from '../portfolio/contact';
import Home from '../page';

export default function Layout({ children, activeTab, setActiveTab }) {
  return (
    <div className="flex h-screen">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex-1 p-6  overflow-auto">
          {/* Tab Content */}

          {/* Content from Home.jsx */}
          

          {/* Content from other pages */}
          {activeTab === 'About.jsx' && <p className="text-gray-300"><AboutMe /></p>}
          {activeTab === 'Projects.jsx' && <p className="text-gray-300"><Projects /></p>}
          {activeTab === 'Contact.jsx' && <p className="text-gray-300"><Contact /></p>}

          {/* Content from other pages */}
          {children}
        </div>
      </div>
    </div>
  );
}