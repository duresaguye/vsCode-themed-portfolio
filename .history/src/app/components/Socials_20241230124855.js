import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'; 

function Socials() {
  return (
   
     <div className="space-y-4 mt-auto">
     
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
   </div>
  )
}

export default Socials