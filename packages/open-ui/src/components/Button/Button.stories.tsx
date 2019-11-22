import React from 'react';

import { Outline } from 'components/Outline';
import { Button } from './Button';

const common = { text: 'Click here', onClick: () => {} };

export const normalButton = () => <Button {...common} />;

export const primaryButton = () => <Button {...common} color="primary" />;

export const secondaryButton = () => <Button {...common} color="secondary" />;

export const buttonWithMarginRight = () => (
  <Outline>
    <Button {...common} marginRight={2} marginBottom={4} />
  </Outline>
);

export default { title: 'Button' };
