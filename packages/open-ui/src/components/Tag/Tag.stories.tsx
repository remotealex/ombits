import React from 'react';

import { Tag } from './Tag';

export const standard = () => (
  <React.Fragment>
    <Tag text="tag1" />
    <Tag text="tag2" />
    <Tag text="tag3" />
  </React.Fragment>
);

export const largeSize = () => (
  <React.Fragment>
    <Tag size="large" text="tag1" />
    <Tag size="large" text="tag2" />
    <Tag size="large" text="tag3" />
  </React.Fragment>
);

export default { title: 'Tag' };
