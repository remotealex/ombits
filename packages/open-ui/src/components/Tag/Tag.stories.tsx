import React from 'react';

import { Tag } from './Tag';

const common = { text: 'Taggy', marginRight: 1 };

export const standard = () => (
  <React.Fragment>
    <Tag {...common} />
    <Tag {...common} />
    <Tag {...common} />
  </React.Fragment>
);

export const secondary = () => (
  <React.Fragment>
    <Tag {...common} intent="secondary" />
    <Tag {...common} intent="secondary" />
    <Tag {...common} intent="secondary" />
  </React.Fragment>
);

export const success = () => (
  <React.Fragment>
    <Tag {...common} intent="success" />
    <Tag {...common} intent="success" />
    <Tag {...common} intent="success" />
  </React.Fragment>
);

export const error = () => (
  <React.Fragment>
    <Tag {...common} intent="error" />
    <Tag {...common} intent="error" />
    <Tag {...common} intent="error" />
  </React.Fragment>
);

export const warning = () => (
  <React.Fragment>
    <Tag {...common} intent="warning" />
    <Tag {...common} intent="warning" />
    <Tag {...common} intent="warning" />
  </React.Fragment>
);

export const large = () => (
  <React.Fragment>
    <Tag {...common} size="large" />
    <Tag {...common} size="large" />
    <Tag {...common} size="large" />
  </React.Fragment>
);

export default { title: 'Tag' };
