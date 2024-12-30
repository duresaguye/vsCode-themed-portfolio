"use client"
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Tabs from '../components/Tabs';
import Terminal from '../components/Terminal';

export default function Home() {
  const [activeTab, setActiveTab] = useState('About');

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex-1 p-6 bg-gray-800 overflow-auto">
          {activeTab === 'About' && <p className="text-gray-300">This is the About section.</p>}
          {activeTab === 'Projects' && <p className="text-gray-300">This is the Projects section.</p>}
          {activeTab === 'Contact' && <p className="text-gray-300">This is the Contact section.</p>}
        </div>
        <Terminal />
      </div>
    </div>
  );
}
