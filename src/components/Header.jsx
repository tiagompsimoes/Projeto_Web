import React from 'react';
import logoISCTE from '../assets/images/logoISCTE.png';

const Header = () => (
  <div Header="min-vh-100 d-flex bg-blue flex-column justify-content-center align-items-center mb-12">
      <div className="card ps-4 border-0" style={{ height: '110px'}}>
        <div className="card-body d-flex justify-content-center align-items-center bg-primary">
            <img 
              src={logoISCTE}
              alt="ISCTE Logo"
            />
        </div>
      </div>
  </div>
);

export default Header;