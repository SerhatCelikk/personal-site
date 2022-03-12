import React, { useContext } from 'react';
import logo from '../signature-black.png';
import logoW from '../signature_white.png';
import { ThemeContext } from '../../utils/ThemeContext';

// ? fill color set in ../../styles/HeaderStyles.js with
// ? .headerLogoSVG class

const LogoSVG = () => {
  const themeData = useContext(ThemeContext);
  console.log(themeData);
  return themeData.currentTheme.themeType == 'light' ? (
    <img src={logo} style={{ marginTop: 10, marginBottom: -10 }} />
  ) : (
    <img src={logoW} style={{ marginTop: 10, marginBottom: -10 }} />
  );
};

export default LogoSVG;
