"use client"
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Tabs from './components/Tabs';
import Terminal from './components/Terminal';

export default function Home() {
  const [activeTab, setActiveTab] = useState('About');

  return (
    < >
     <h1 className="text-2xl text-blue-400">About Me</h1>
    </>
  );
}
