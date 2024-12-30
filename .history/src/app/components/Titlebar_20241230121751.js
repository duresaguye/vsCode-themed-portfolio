import Image from 'next/image';

const Titlebar = () => {
  return (
    <section className="bg-gray-600 h-[30px] px-2.5 flex items-center justify-center text-white font-sans text-sm border-b border-[#191d20]">
      <Image
        src="/vscode.svg"
        alt="VSCode Icon"
        height={15}
        width={15}
        className="h-[15px] w-[15px]"
      />
      <div className="flex flex-1 mr-auto ml-2.5 sm:hidden">
        <p className="px-2.5 cursor-pointer underline">File</p>
        <p className="px-2.5 cursor-pointer underline">Edit</p>
        <p className="px-2.5 cursor-pointer underline">View</p>
        <p className="px-2.5 cursor-pointer underline">Go</p>
        <p className="px-2.5 cursor-pointer underline">Run</p>
        <p className="px-2.5 cursor-pointer underline">Terminal</p>
        <p className="px-2.5 cursor-pointer underline">Help</p>
      </div>
      <p className="flex-1 text-center underline">Duresa Guye - Visual Studio Code</p>

      {/* Social Media Icons */}
      <div className="space-y-4 mt-auto">
        <h3 className="text-blue-400 mb-4 text-lg font-bold">Follow Me</h3>
        <div className="flex space-x-4">
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
     
    </section>
  );
};

export default Titlebar;
