import Image from 'next/image';

const Titlebar = () => {
  return (
    <section className="bg-[var(--titlebar-bg)] h-[30px] px-2.5 flex items-center justify-center text-white font-sans text-sm border-b border-[#191d20]">
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
      <p className="flex-1 text-center underline">Nitin Ranganath - Visual Studio Code</p>
      <div className="flex flex-1 items-center ml-auto">
        <span className="h-[13px] w-[13px] rounded-full bg-[#f1fa8c] ml-auto cursor-pointer"></span>
        <span className="h-[13px] w-[13px] rounded-full bg-[#50fa7b] ml-2 cursor-pointer"></span>
        <span className="h-[13px] w-[13px] rounded-full bg-[#ff5555] ml-2 cursor-pointer"></span>
      </div>
    </section>
  );
};

export default Titlebar;