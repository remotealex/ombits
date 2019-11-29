import React from 'react';
import { withKnobs, radios } from '@storybook/addon-knobs';

import { Outline } from 'components/Outline';
import { Button } from './Button';
import { SizeOption } from 'interfaces/SizeOption';

const common = { text: 'Click here', onClick: () => {} };

export const base = () => <Button {...common} />;

export const primary = () => <Button {...common} intent="primary" />;

export const secondary = () => <Button {...common} intent="secondary" />;

export const success = () => <Button {...common} intent="success" />;

export const error = () => <Button {...common} intent="error" />;

export const warning = () => <Button {...common} intent="warning" />;

export const sizes = () => {
  const size = radios('Size', { Regular: 'regular', Large: 'large' }, 'large');
  return <Button {...common} intent="primary" size={size as SizeOption} />;
};

export const withMargin = () => (
  <Outline>
    <Button {...common} marginRight={2} marginBottom={4} />
  </Outline>
);

export default { title: 'Button', decorators: [withKnobs] };
