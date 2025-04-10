import React from 'react';

import header from '../assets/images/header.png';

const Header = () => (
  <header className="bg-primary text-white p-3">
    <div className="container">
      <img src={header} alt="" />
    </div>
  </header>
);

export default Header;