import React from 'react';

import watermarkImg from '../assets/images/watermarklogin.png';

const WatermarkLogin = () => {
  return (
    <img
      src={watermarkImg}
      alt="Watermark"
      style={{width: '100%', display: 'block'}}
    />
  );
};

export default WatermarkLogin;
