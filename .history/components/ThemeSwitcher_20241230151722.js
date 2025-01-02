import { useContext } from 'react';
import { ThemeContext } from '@/app/context/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <select
      value={theme}
      onChange={(e) => toggleTheme(e.target.value)}
      style={{
        padding: '10px',
        margin: '10px',
        border: '1px solid var(--primary-color)',
        backgroundColor: 'var(--bg-color)',
        color: 'var(--text-color)',
      }}
    >
      <option value="light-owl">Light Owl</option>
      <option value="dark-theme">Dark Theme</option>
    </select>
  );
};

export default ThemeSwitcher;