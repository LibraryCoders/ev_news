import React from 'react';
import Navbar from './Navbar';
interface LayoutProps {
  children: ReactNode;
}
const Layout = ({
  children
}: LayoutProps) => {
  return <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="flex-grow w-full">{children}</main>
      <footer className="py-6 px-8 text-center text-sm text-blue-400 border-t border-blue-900/30 bg-[#080b12]">
        <p>© 2023 Electric News • All Rights Reserved</p>
      </footer>
    </div>;
};
export default Layout;