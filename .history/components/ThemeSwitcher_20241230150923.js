// components/ThemeSwitcher.js
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <select
      value={theme}
      onChange={(e) => toggleTheme(e.target.value)}
    >
      <option value="light-owl">Light Owl</option>
      <option value="dark-theme">Dark Theme</option>
    </select>
  );
};

export default ThemeSwitcher;
