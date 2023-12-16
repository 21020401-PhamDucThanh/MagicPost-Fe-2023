import React from 'react';
import './navbar.scss';
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <span className="navbar__text">Xin chào,</span>
        <span className="navbar__text">Chúc một ngày mới tốt lành!</span>
      </div>
      <div className="navbar__right">
        <Button variant="contained" className="navbar__button">Contained</Button>
        <Button variant="outlined" className="navbar__button">Outlined</Button>
      </div>
    </nav>
  );
};

export default Navbar;