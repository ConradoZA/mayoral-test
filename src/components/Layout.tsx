import NavBar from './NavBar';
import Meta from './Meta';
import { ReactNode } from 'react';

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
