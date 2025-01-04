import Image from 'next/image';
import { useEffect } from 'react';

const ThemeInfo = ({ icon, name, publisher, theme }) => {
  const setTheme = (selectedTheme) => {
    console.log(`Setting theme to: ${selectedTheme}`);
    // Set the 'data-theme' attribute for theme switching
    document.documentElement.setAttribute('data-theme', selectedTheme);
    // Save the selected theme in localStorage
    localStorage.setItem('theme', selectedTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      console.log(`Applying saved theme: ${savedTheme}`);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      // If no saved theme, apply the default theme (optional)
      document.documentElement.setAttribute('data-theme', 'default');
    }
  }, []);

  return (
    <div className="flex flex-col items-center my-6 px-6 text-center">
      <Image src={icon} alt={name} height={100} width={100} />
      <div className="mt-4 flex flex-col justify-between">
        <div>
          <h3>{name}</h3>
          <h5>{publisher}</h5>
        </div>
        <button
          onClick={() => setTheme(theme)}
          className="mt-3 border-none bg-button-bg text-button-text px-2 py-1 font-semibold cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-color"
        >
          Set Color Theme
        </button>
      </div>
    </div>
  );
};

export default ThemeInfo;
