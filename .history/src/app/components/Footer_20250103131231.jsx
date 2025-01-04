import ErrorIcon from './icons/ErrorIcon';
import WarningIcon from './icons/WarningIcon';
import BellIcon from './icons/BellIcon';
import CheckIcon from './icons/CheckIcon';
import NextjsIcon from './icons/NextjsIcon';
import SourceControlIcon from './icons/SourceControlIcon';

const Bottombar = () => {
  return (
    <footer className=" h-6 border-t border-gray-700 text-gray-200 px-2 flex items-center justify-between text-xs">
      <div className="flex items-center">
        <a
          href="https://github.com/itsnitinr/vscode-portfolio"
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center mr-2 h-6 px-1 cursor-pointer hover:bg-gray-700"
        >
          <SourceControlIcon className="mr-1" />
          <p>main</p>
        </a>
        <div className="flex items-center mr-2 h-6 px-1 cursor-pointer hover:bg-gray-700">
          <ErrorIcon className="mr-1" />
          <p className="text-red-500">0</p>&nbsp;&nbsp;
          <WarningIcon className="mr-1" />
          <p>0</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-2 h-6 px-1 cursor-pointer hover:bg-gray-700">
          <NextjsIcon className="mr-1" />
          <p>Powered by Next.js</p>
        </div>
        <div className="flex items-center mr-2 h-6 px-1 cursor-pointer hover:bg-gray-700">
          <CheckIcon className="mr-1" />
          <p>Prettier</p>
        </div>
        <div className="flex items-center h-6 px-1 cursor-pointer hover:bg-gray-700">
          <BellIcon />
        </div>
      </div>
    </footer>
  );
};

export default Bottombar;
