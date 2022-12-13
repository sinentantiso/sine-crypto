import React, { useContext } from 'react';
import { HiSun, HiMoon } from 'react-icons/ai';
import ThemeContext from './context/ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      {theme === 'dark' ? (
        <div>
          <HiSun />
          Light Mode
        </div>
      ) : (
        <div>
          <HiMoon />
          Dark Mode
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
