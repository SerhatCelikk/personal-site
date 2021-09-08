import React, { FC } from 'react';
import s from './Layout.module.css';

interface Props {
  theme: 'dark' | 'light';
}

const Layout: FC<Props> = ({ children }) => {
  return <div className={s.root}>{children}</div>;
};

export default Layout;
