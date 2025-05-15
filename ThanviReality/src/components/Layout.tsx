
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  activeSection?: string;
  onNavClick?: (sectionId: string) => void;
}

const Layout = ({ children, activeSection, onNavClick }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar activeSection={activeSection} onNavClick={onNavClick} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
