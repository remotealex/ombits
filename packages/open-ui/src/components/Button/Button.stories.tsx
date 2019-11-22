import React from 'react';
import { withKnobs, radios } from '@storybook/addon-knobs';

import { Outline } from 'components/Outline';
import { Button } from './Button';
import { SizeOption } from 'interfaces/SizeOption';

const common = { text: 'Click here', onClick: () => {} };

export const base = () => <Button {...common} />;

export const primary = () => <Button {...common} type="primary" />;

export const secondary = () => <Button {...common} type="secondary" />;

export const sizes = () => {
  const size = radios('Size', { Regular: 'regular', Large: 'large' }, 'large');
  return <Button {...common} type="secondary" size={size as SizeOption} />;
};

export const withMarginRight = () => (
  <Outline>
    <Button {...common} marginRight={2} marginBottom={4} />
  </Outline>
);

export default { title: 'Button', decorators: [withKnobs] };
