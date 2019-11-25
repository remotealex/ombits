import React from 'react';
import { withKnobs, radios, text } from '@storybook/addon-knobs';

import { Outline } from 'components/Outline';
import { Image } from './Image';

const common = {
  alt: 'A lovely kitten!',
  height: '150px',
  src: 'http://placekitten.com/200/300',
  width: '150px',
};

export const base = () => <Image {...common} />;

export const borderRadius = () => {
  const borderRadius = radios(
    'Border radius',
    { Small: 'small', Medium: 'medium', Large: 'large' },
    'medium',
  );
  return <Image {...common} borderRadius={borderRadius} />;
};

export const circular = () => <Image {...common} circle />;

export const sizes = () => {
  const height = text('Height', '100px', '1');
  const width = text('Width', '200px', '1');
  const sizes = { height, width };

  return <Image {...common} {...sizes} />;
};

export const withMargin = () => (
  <Outline>
    <Image {...common} marginRight={2} marginBottom={4} />
  </Outline>
);

export default { title: 'Image', decorators: [withKnobs] };
