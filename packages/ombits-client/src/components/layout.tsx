import React from 'react';

import { Header } from './header';
import { Footer } from './footer';

export const Layout: React.FC = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />

      <style jsx>{`
        .layout {
          height: 100vh;
          min-height: 500px;
          position: relative;
        }
      `}</style>
    </div>
  );
};
