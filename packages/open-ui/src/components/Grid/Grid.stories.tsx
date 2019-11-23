import React from 'react';
import { optionsKnob, withKnobs, number } from '@storybook/addon-knobs';

import { Grid, ColOption } from './Grid';
import { Wrapper } from 'components/Wrapper';
import { Outline } from 'components/Outline';

const tempCards = [
  <div
    style={{ height: '100px', width: '100%', background: 'blue' }}
    key="1"
  />,
  <div
    style={{ height: '100px', width: '100%', background: 'green' }}
    key="2"
  />,
  <div
    style={{ height: '100px', width: '100%', background: 'pink' }}
    key="3"
  />,
  <div style={{ height: '100px', width: '100%', background: 'red' }} key="4" />,
  <div
    style={{ height: '100px', width: '100%', background: 'yellow' }}
    key="5"
  />,
];

export const base = () => (
  <Wrapper>
    <Grid>{tempCards}</Grid>
  </Wrapper>
);

export const columns = () => {
  const cols = number('Number of cols (2-6)', 2);

  if (!cols) {
    return null;
  }

  return (
    <Wrapper>
      <Grid cols={cols as ColOption}>{tempCards}</Grid>
    </Wrapper>
  );
};

export const withGutters = () => (
  <Wrapper>
    <Outline block>
      <Grid gutters cols={4}>
        {tempCards}
      </Grid>
    </Outline>
  </Wrapper>
);

export const overflowFill = () => (
  <Wrapper>
    <Grid overflowFill cols={4}>
      {tempCards}
    </Grid>
  </Wrapper>
);

export default { title: 'Grid', decorators: [withKnobs] };
