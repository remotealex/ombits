import React from 'react';
import { withKnobs, number } from '@storybook/addon-knobs';

import { AutoGrid } from './AutoGrid';
import { Wrapper } from 'components/Wrapper';
import { Outline } from 'components/Outline';
import { ColOption } from 'interfaces/ColumnOptions';

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

export const base = () => {
  const cols = number('Number of cols (0-12)', 2);

  if (!cols) {
    return null;
  }

  return (
    <Wrapper>
      <AutoGrid base={cols as ColOption}>{tempCards}</AutoGrid>
    </Wrapper>
  );
};

export const responsive = () => {
  return (
    <Wrapper>
      <AutoGrid sm={2} md={3} lg={4} xl={5}>
        {tempCards}
      </AutoGrid>
    </Wrapper>
  );
};

export const withGutters = () => (
  <Wrapper>
    <Outline block>
      <AutoGrid gutters base={3}>
        {tempCards}
      </AutoGrid>
    </Outline>
  </Wrapper>
);

export const overflowFill = () => (
  <Wrapper>
    <AutoGrid overflowFill base={4}>
      {tempCards}
    </AutoGrid>
  </Wrapper>
);

export default { title: 'AutoGrid', decorators: [withKnobs] };
