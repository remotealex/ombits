import React from 'react';
import { Navigation, NavigationItem } from 'om-ui';

export const Header = () => {
  return (
    <div>
      <Navigation logo={<div className="logo" />}>
        <NavigationItem text="Home" />
      </Navigation>

      <style jsx>{`
        .logo {
          background: #7f5af0;
          height: 30px;
          border-radius: 50%;
          width: 30px;
        }
      `}</style>
    </div>
  );
};
