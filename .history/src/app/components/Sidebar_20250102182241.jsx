"use client";
import { useState } from 'react';
import Socials from './Socials';

export default function Sidebar({ activeTab, setActiveTab }) {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(true); 
  
  const [isBlogOpen, setIsBlogOpen] = useState(true);

 

  return (
    <div className="bg-gray-900 text-gray-300 p-4 flex flex-col sm:flex-row justify-between">
      {/* Socials Section */}
      <div className="sm:mr-2 mb-4 sm:mb-0 ">
        <Socials />
      </div>

      {/* Explorer Section */}
      <div className="flex-1 sm:block hidden">
        <h3 className=" mb-4 text-lg font-bold">Explorer</h3>
        <ul className="space-y-3">
          {/* Custom Folder Icon */}
          <div onClick={() => setIsBlogOpen(!isBlogOpen)}> 
          <li className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer" onClick={() => setActiveTab('Home')}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" className="text-yellow-500">
              <path fill="#FFA000" d="M40,12H22l-4-4H8c-2.2,0-4,1.8-4,4v8h40v-4C44,13.8,42.2,12,40,12z"></path>
              <path fill="#FFCA28" d="M40,12H8c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V16C44,13.8,42.2,12,40,12z"></path>
            </svg>
            <span>Blog</span>
          </li>
          </div>
        

          {/* Portfolio Folder */}
          <li>
            <div
              className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer"
              onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" className="text-yellow-500">
                <path fill="#FFA000" d="M40,12H22l-4-4H8c-2.2,0-4,1.8-4,4v8h40v-4C44,13.8,42.2,12,40,12z"></path>
                <path fill="#FFCA28" d="M40,12H8c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V16C44,13.8,42.2,12,40,12z"></path>
              </svg>
              <span>Portfolio</span>
            </div>
            {/* Dropdown */}
            {isPortfolioOpen && (
              <ul className="ml-6 mt-2 space-y-2">
                <li className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer" onClick={() => setActiveTab('Home.jsx')}>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" className="text-yellow-500">
                    <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                    <path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
                  </svg>
                  <span>Home.jsx</span>
                </li>
                <li className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer" onClick={() => setActiveTab('/About')}>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" className="text-yellow-500">
                    <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                    <path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
                  </svg>
                  <span>Aboutme.jsx</span>
                </li>
                <li className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer" onClick={() => setActiveTab('Projects.jsx')}>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" className="text-yellow-500">
                    <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                    <path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
                  </svg>
                  <span>Projects.jsx</span>
                </li>
                <li className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer" onClick={() => setActiveTab('Contact.jsx')}>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" className="text-yellow-500">
                    <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                    <path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
                  </svg>
                  <span>Contact.jsx</span>
                </li>
                <li className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer" onClick={() => setActiveTab('Github.md')}>
                <svg version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m2.25 15.75v-8h2l3 3 3-3h2v8h-2v-5.17l-3 3-3-3v5.17h-2m14-8h3v4h2.5l-4 4.5-4-4.5h2.5z" fill="#42a5f5"/>
                </svg>
                  <span>Github.md</span>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}