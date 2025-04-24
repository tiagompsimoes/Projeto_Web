import React from 'react';
import '../assets/css/Header2.css';
import logo from '../assets/images/logoISCTE.png';

const Header2 = () => {
  return (
    <header className="header2">
      <div className="header2-left">
        <img src={logo} alt="ISCTE Logo" className="logo" />
        <span className="data">15 Março 2025</span>
      </div>
      <div className="header2-right">
        <div className="icon-circle">
          <div className="circle small-green"></div>
          <div className="circle small-blue"></div>
        </div>
      </div>
    </header>
  );
};

export default Header2;
