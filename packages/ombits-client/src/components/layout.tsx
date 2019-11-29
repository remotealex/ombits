import React from 'react';

import { Header } from './header';
import { Footer } from './footer';

export const Layout: React.FC = ({ children }) => {
  return (
    <div className="layout">
      <div className="header">
        <Header />
        <div className="mode">Focus mode</div>
      </div>
      {children}
      <Footer />

      <style jsx>{`
        .layout {
          height: 100vh;
          min-height: 500px;
          position: relative;
        }

        .header {
          position: relative;
          z-index: 1;
        }

        .mode {
          background: rgba(255, 255, 255, 0.1);
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
          bottom: 0;
          cursor: pointer;
          font-size: 14px;
          left: 50%;
          opacity: 0.25;
          padding: 8px 20px;
          position: absolute;
          transform: translate(-50%, 100%);
          transition: all 0.2s ease;
        }

        .mode:hover {
          opacity: 0.4;
        }
      `}</style>
    </div>
  );
};
