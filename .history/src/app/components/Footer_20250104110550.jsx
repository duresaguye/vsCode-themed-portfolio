import ErrorIcon from './icons/ErrorIcon';
import WarningIcon from './icons/WarningIcon';
import BellIcon from './icons/BellIcon';
import CheckIcon from './icons/CheckIcon';
import NextjsIcon from './icons/NextjsIcon';
import SourceControlIcon from './icons/SourceControlIcon';

const Bottombar = () => {
  return (
    <footer className="bg-bottombar-bg h-6 border-t border-bottombar-border text-gray-200 px-2.5 flex items-center justify-between text-sm">
      <div className="flex items-center">
        <a
          href="https://github.com/duresaguye"
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center mr-2.5"
        >
          <SourceControlIcon className="mr-1" />
          <p>main</p>
        </a>
        <div className="flex items-center">
          <ErrorIcon className="mr-1" />
          <p className="text-errorText">0</p>&nbsp;&nbsp;
          <WarningIcon className="mr-1" />
          <p>0</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-2.5">
          <NextjsIcon className="mr-1" />
          <p>Powered by Next.js</p>
        </div>
        <div className="flex items-center mr-2.5">
          <CheckIcon className="mr-1" />
          <p>Prettier</p>
        </div>
        <div className="flex items-center">
          <BellIcon />
        </div>
      </div>
    </footer>
  );
};

export default Bottombar;
