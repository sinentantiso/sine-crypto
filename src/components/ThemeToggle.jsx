import React, {useContext} from 'react';
import { HiSun, HiMoon } from 'react-icons/ai';
import ThemeContext from './context/ThemeContext';

const ThemeToggle = () => {
  const {theme, setTheme} = useContext(ThemeContext)


  return (
    <div>
      {theme === 'dark' ? (
        <div></div>
      ): <div></div>}
    </div>
  )
}

export default ThemeToggle