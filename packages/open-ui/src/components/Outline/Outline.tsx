import React from 'react';

interface OutlineProps {
  block?: boolean;
}

export const Outline: React.FC<OutlineProps> = ({ block, children }) => (
  <div
    style={{
      border: '2px dashed rgba(255, 0, 0, 0.5)',
      display: block ? 'block' : 'inline-block',
    }}
  >
    {children}
  </div>
);
