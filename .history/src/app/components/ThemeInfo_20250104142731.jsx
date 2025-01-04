import Image from 'next/image';
import { useEffect } from 'react';

const ThemeInfo = ({ icon, name, publisher, theme }) => {
  const setTheme = (theme) => {
    try {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      console.log(`Theme set to: ${theme}`);
    } catch (err) {
      console.error("Error setting theme:", err);
    }
  };

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        console.log(`Applied saved theme: ${savedTheme}`);
      } else {
        setTheme('github-dark'); // Set a default theme
      }
    } catch (err) {
      console.error("Error applying saved theme:", err);
    }
  }, []);

  return (
    <div className="flex flex-col items-center my-6 px-6 text-center">
      <Image src={icon} alt={`Theme icon for ${name}`} height={100} width={100} />
      <div className="mt-4 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-gray-500">{publisher}</p>
        </div>
        <button
          onClick={() => setTheme(theme)}
          className="mt-3 px-4 py-2 bg-accent-color text-button-text rounded hover:bg-opacity-90"
        >
          Apply Theme
        </button>
      </div>
    </div>
  );
};

export default ThemeInfo;
