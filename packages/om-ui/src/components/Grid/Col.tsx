import React from 'react';
import classNames from 'classnames';

import styles from './Grid.module.scss';
import { ColSizeProps } from 'interfaces/ColumnOptions';

export const Col: React.FC<ColSizeProps> = props => {
  const { children, base, sm, md, lg, xl } = props;

  // Build the class names
  const cls = classNames(
    styles.col,
    styles[`colBase${base}`],
    styles[`colSmall${sm}`],
    styles[`colMedium${md}`],
    styles[`colLarge${lg}`],
    styles[`colXlarge${xl}`],
  );

  return <div className={cls}>{children}</div>;
};
