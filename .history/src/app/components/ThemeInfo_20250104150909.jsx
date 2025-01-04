import Image from 'next/image';

const ThemeInfo = ({ icon, name, publisher, theme }) => {
  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

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
