import ErrorIcon from './icons/ErrorIcon';
import WarningIcon from './icons/WarningIcon';
import BellIcon from './icons/BellIcon';
import CheckIcon from './icons/CheckIcon';
import NextjsIcon from './icons/NextjsIcon';
import SourceControlIcon from './icons/SourceControlIcon';
import GitBranchIcon from './icons/GitBranchIcon'; // Import GitBranchIcon
import WifiIcon from './icons/WifiIcon'; // Import WifiIcon

const Bottombar = () => {
  return (
    <div className="h-6 bg-[#007ACC] text-white text-sm flex items-center px-2 gap-4">
      <div className="flex items-center gap-1">
        <GitBranchIcon className="h-4 w-4" />
        <span>main</span>
      </div>
      <div className="flex items-center gap-1">
        <WifiIcon className="h-4 w-4" />
        <span>Connected</span>
      </div>
      <div className="ml-auto">Ln 1, Col 1</div>
    </div>
  );
};

export default Bottombar;