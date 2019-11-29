import React from 'react';
import classNames from 'classnames';

import styles from './Grid.module.scss';

interface GridProps {
  gutters?: boolean;
}

export const Grid: React.FC<GridProps> = props => {
  const { children, gutters } = props;

  const cls = classNames(styles.grid, {
    [styles.gutters]: gutters,
  });

  return <div className={cls}>{children}</div>;
};
