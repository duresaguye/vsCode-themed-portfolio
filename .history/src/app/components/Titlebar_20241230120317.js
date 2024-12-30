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
      <div className="flex flex-1 mr-auto ml-2.5">
        <p className="px-2.5 cursor-pointer">File</p>
        <p className="px-2.5 cursor-pointer">Edit</p>
        <p className="px-2.5 cursor-pointer">View</p>
        <p className="px-2.5 cursor-pointer">Go</p>
        <p className="px-2.5 cursor-pointer">Run</p>
        <p className="px-2.5 cursor-pointer">Terminal</p>
        <p className="px-2.5 cursor-pointer">Help</p>
      </div>
      <p className="flex-1 text-center">Nitin Ranganath - Visual Studio Code</p>
      <div className="flex flex-1 items-center ml-auto">
        <span className="h-[13px] w-[13px] rounded-full bg-[#f1fa8c] ml-auto cursor-pointer"></span>
        <span className="h-[13px] w-[13px] rounded-full bg-[#50fa7b] ml-2 cursor-pointer"></span>
        <span className="h-[13px] w-[13px] rounded-full bg-[#ff5555] ml-2 cursor-pointer"></span>
      </div>
    </section>
  );
};

export default Titlebar;
