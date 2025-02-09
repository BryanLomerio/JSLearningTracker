import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button className='btn-dark' onClick={toggleDarkMode}>
      {darkMode ? 'Light' : 'Dark'}
    </button>
  );
};

export default DarkModeToggle;
