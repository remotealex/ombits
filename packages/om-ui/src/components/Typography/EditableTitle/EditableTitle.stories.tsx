import React, { Fragment } from 'react';

import { EditableTitle } from './EditableTitle';

const common = {
  value: 'Editable heading text',
  onChange: (value: string) => {
    console.log('value!', value);
  },
  onBlur: (isChanged: boolean) => {
    console.log('isChanged!', isChanged);
  },
};

export const editableHeadings = () => (
  <Fragment>
    <EditableTitle as="h1" {...common} />
    <EditableTitle as="h2" {...common} />
    <EditableTitle as="h3" {...common} />
    <EditableTitle as="h4" {...common} />
  </Fragment>
);

export default { title: 'EditableTitle' };
