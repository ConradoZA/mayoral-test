import { ReactNode } from 'react';

import Meta from './Meta';
import NavBar from './NavBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Meta />
      <NavBar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
