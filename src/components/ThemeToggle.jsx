import React, { useContext } from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import ThemeContext from './context/ThemeContext';



const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className='p-12'>
      {theme === 'dark' ? (
        <div onClick ={()=> setTheme(theme === 'dark' ? 'light' : 'dark')}>
          <BsFillSunFill />
          Light Mode
        </div>
      ) : (
        <div onClick ={()=> setTheme(theme === 'dark' ? 'light' : 'dark')}>
          <BsFillMoonFill />
          Dark Mode
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
