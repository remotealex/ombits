import React from 'react';

export const Outline: React.FC = ({ children }) => (
  <div
    style={{
      border: '2px dashed rgba(255, 0, 0, 0.5)',
      display: 'inline-block',
    }}
  >
    {children}
  </div>
);
