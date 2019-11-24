import React, { ReactNode } from 'react';
import classNames from 'classnames';

import { MarginStyleKeys } from 'interfaces/MarginStyleKeys';
import { getMarginProps } from 'utils/helpers';
import styles from './Grid.module.scss';

export type ColOption = 2 | 3 | 4 | 5 | 6;

interface GridProps {
  cols?: ColOption;
  gutters?: boolean;
  overflowFill?: boolean;
}

export const Grid: React.FC<GridProps & MarginStyleKeys> = props => {
  const { children, cols, gutters, overflowFill, ...styleProps } = props;
  const marginProps = getMarginProps(props);

  // Build the class names
  const cls = classNames(styles.grid, {
    [styles.gutters]: gutters,
    [styles.cols]: cols,
    [styles.cols2]: cols === 2,
    [styles.cols3]: cols === 3,
    [styles.cols4]: cols === 4,
    [styles.cols5]: cols === 5,
    [styles.cols6]: cols === 6,
    [styles.overflowFill]: overflowFill,
  });

  const _children = React.Children.toArray(children);

  return (
    <div className={cls} style={marginProps}>
      {_children.map((child: ReactNode, idx: number) => (
        <div key={idx}>{child}</div>
      ))}
    </div>
  );
};
