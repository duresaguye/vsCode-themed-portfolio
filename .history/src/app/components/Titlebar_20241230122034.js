import Image from 'next/image';
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Titlebar = () => {
  return (
    <section className="bg-gray-600 h-[30px] px-2.5 flex items-center justify-center text-white font-sans text-sm border-b border-[#191d20]">
      {/* VSCode Icon */}
      <Image
        src="/vscode.svg"
        alt="VSCode Icon"
        height={15}
        width={15}
        className="h-[15px] w-[15px]"
      />

      {/* Navigation Items */}
      <div className="flex flex-1 mr-auto ml-2.5 sm:hidden">
        <p className="px-2.5 cursor-pointer underline">File</p>
        <p className="px-2.5 cursor-pointer underline">Edit</p>
        <p className="px-2.5 cursor-pointer underline">View</p>
        <p className="px-2.5 cursor-pointer underline">Go</p>
        <p className="px-2.5 cursor-pointer underline">Run</p>
        <p className="px-2.5 cursor-pointer underline">Terminal</p>
        <p className="px-2.5 cursor-pointer underline">Help</p>
      </div>

      {/* Title */}
      <p className="flex-1 text-center underline">Duresa Guye - Visual Studio Code</p>

      {/* Social Media Icons - Positioned in a vertical column */}
      <div className="flex flex-col ml-4 space-y-2">
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
    </section>
  );
};

export default Titlebar;
