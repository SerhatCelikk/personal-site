import React from 'react';
import logo from '../signature-black.png';
// ? fill color set in ../../styles/HeaderStyles.js with
// ? .headerLogoSVG class

const LogoSVG = () => {
  return <img src={logo} style={{ marginTop: 10, marginBottom: -10 }} />;
};

export default LogoSVG;
