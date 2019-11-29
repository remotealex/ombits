import React from 'react';

import { Navigation, NavigationItem } from './';

export const standard = () => (
  <Navigation
    logo={
      <div
        style={{
          background: '#7f5af0',
          height: '25px',
          transform: 'rotate(45deg)',
          width: '25px',
        }}
      />
    }
  >
    <NavigationItem text="Home" href="/" />
    <NavigationItem text="About" href="/about" />
  </Navigation>
);

export default { title: 'Navigation' };
