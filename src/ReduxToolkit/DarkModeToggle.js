import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from './DarkMode';

const DarkModeToggle = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.darkMode);

  const handleClick = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div className='navbar-nav ms-auto'>
    <button  className={`btn btn-primary ${isDarkMode ? "dark" : "light"}`} onClick={handleClick}>
      {isDarkMode ? 'Disable' : 'Enable'} Dark Mode
    </button>

    </div>
  );
};

export default DarkModeToggle;
