import React from 'react';
import '../assets/css/Header.css';
import logo from '../assets/images/logoISCTE.png';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="ISCTE Logo" className="logo" />
    </header>
  );
};

export default Header;
