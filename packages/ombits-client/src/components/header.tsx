import React, { useState, useCallback } from 'react';
import { useCurrentRoute } from 'react-navi';

import { Nav } from './nav';

export const Header = () => {
  const route = useCurrentRoute();
  const { navTabText } = route.state;

  const [isNavVisible, setNavVisibility] = useState(false);
  const closeNav = useCallback(() => {
    setNavVisibility(false);
  }, [setNavVisibility]);

  return (
    <>
      <div className="header">
        <div className={'nav' + (isNavVisible ? ' nav--visible' : '')}>
          <Nav onCloseNav={closeNav} />
          <button
            className="mode"
            onClick={e => {
              e.preventDefault();
              e.currentTarget.blur();
              setNavVisibility(!isNavVisible);
            }}
          >
            {navTabText}
          </button>
        </div>
      </div>

      {isNavVisible && <div className="overlay" onClick={closeNav} />}

      <style jsx>{`
        .header {
          position: relative;
          z-index: 2;
        }

        .nav {
          background: #16161a;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          position: absolute;
          top: 0;
          transform: translateY(-100%);
          transition: all 0.3s;
          width: 100%;
        }

        .nav--visible {
          transform: translateY(0);
        }

        .mode {
          background: #16161a;
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
          border-top: none;
          border-left: 1px solid rgba(255, 255, 255, 0.2);
          border-right: 1px solid rgba(255, 255, 255, 0.2);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          bottom: 0;
          color: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          font-size: 14px;
          left: 50%;
          outline: none;
          padding: 8px 20px;
          position: absolute;
          transform: translate(-50%, 100%);
          transition: all 0.2s ease;
        }

        .mode:hover {
          color: rgba(255, 255, 255, 0.5);
        }

        .mode:focus {
          color: rgba(255, 255, 255, 1);
        }

        .overlay {
          bottom: 0;
          cursor: alias;
          left: 0;
          opacity: 0;
          position: fixed;
          right: 0;
          top: 0;
          z-index: 1;
        }
      `}</style>
    </>
  );
};
