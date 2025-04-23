import React from 'react';
import logoISCTE from '../assets/images/logoISCTE.png';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img src={logoISCTE} alt="ISCTE Logo" />
      </div>
    </header>
  );
};

export default Header;