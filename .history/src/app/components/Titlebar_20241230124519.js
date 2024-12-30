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
      <div className="flex flex-1 mr-auto ml-2.5">
        <p className="px-2.5 cursor-pointer underline">File</p>
        <p className="px-2.5 cursor-pointer underline">Edit</p>
        <p className="px-2.5 cursor-pointer underline">View</p>
        <p className="px-2.5 cursor-pointer underline">Go</p>
        <p className="px-2.5 cursor-pointer underline">Run</p>
        <p className="px-2.5 cursor-pointer underline">Terminal</p>
        <p className="px-2.5 cursor-pointer underline">Help</p>
      </div>
      <p className="flex-1 text-center underline">Duresa Guye - Visual Studio Code</p>
      
     
    </section>
  );
};

export default Titlebar;
