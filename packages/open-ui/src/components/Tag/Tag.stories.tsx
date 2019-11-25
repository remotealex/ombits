import React from 'react';

import { Tag } from './Tag';

export const standard = () => (
  <React.Fragment>
    <Tag name="tag1" />
    <Tag name="tag2" />
    <Tag name="tag3" />
  </React.Fragment>
);

export const largeSize = () => (
  <React.Fragment>
    <Tag size="large" name="tag1" />
    <Tag size="large" name="tag2" />
    <Tag size="large" name="tag3" />
  </React.Fragment>
);

export default { title: 'Tag' };
