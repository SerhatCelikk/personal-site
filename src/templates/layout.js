import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../utils/ThemeContext';
import { ThemeProvider } from 'styled-components';
import Head from '../utils/Helmet';

import { LayoutWrapper } from '../styles/layout/LayoutStyles';
import Header from '../components/layout/Header';
import ThemeToggleBtn from '../components/layout/ThemeToggleBtn';
import Footer from '../components/layout/Footer';
import MobileNav from '../components/layout/MobileNav';

const Layout = ({ children, seo }) => {
  // subscribes to value from ../utils/ThemeContext.js and
  // gives current theme to styled-components <ThemeProvider>
  const theme = useContext(ThemeContext);
  let [mobileNavIsOpen, toggleMobileNav] = useState(false);

  const mobileNavAction = () => {
    toggleMobileNav(
      mobileNavIsOpen ? (mobileNavIsOpen = false) : (mobileNavIsOpen = true)
    );
  };

  // adds smooth scrolling
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line global-require
      require('smooth-scroll')('a[href*="#"]');
    }
  });

  return (
    <ThemeProvider theme={theme.currentTheme}>
      <LayoutWrapper>
        <Head seo={seo} />
        <Header mobileNavIsOpen={mobileNavIsOpen} action={mobileNavAction} />
        <MobileNav mobileNavIsOpen={mobileNavIsOpen} action={mobileNavAction} />

        <main>{children}</main>

        <ThemeToggleBtn />
        <Footer />
      </LayoutWrapper>
    </ThemeProvider>
  );
};

export default Layout;
