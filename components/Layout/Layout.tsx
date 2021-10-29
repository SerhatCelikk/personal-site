import React, { FC } from 'react';
import s from './styles.module.css';

const Layout: FC = ({ children }) => {
  return <div className={s.root}>{children}</div>;
};

export default Layout;
