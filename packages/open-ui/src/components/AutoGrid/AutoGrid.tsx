import React, { ReactNode } from 'react';
import classNames from 'classnames';

import { MarginStyleKeys } from 'interfaces/MarginStyleKeys';
import { getMarginProps } from 'utils/helpers';
import styles from './AutoGrid.module.scss';

export type ColOption = 2 | 3 | 4 | 5 | 6;

interface GridProps {
  base?: ColOption;
  sm?: ColOption;
  md?: ColOption;
  lg?: ColOption;
  xl?: ColOption;
  gutters?: boolean;
  overflowFill?: boolean;
}

export const AutoGrid: React.FC<GridProps & MarginStyleKeys> = props => {
  const { children, base, sm, md, lg, xl, gutters, overflowFill } = props;
  const marginProps = getMarginProps(props);

  // Build the class names
  const cls = classNames(styles.grid, {
    [styles.gutters]: gutters,
    [styles.cols]: base || sm || md || lg || xl,
    [styles.cols2base]: base === 2,
    [styles.cols2sm]: sm === 2,
    [styles.cols2md]: md === 2,
    [styles.cols2lg]: lg === 2,
    [styles.cols2xl]: xl === 2,
    [styles.cols3base]: base === 3,
    [styles.cols3sm]: sm === 3,
    [styles.cols3md]: md === 3,
    [styles.cols3lg]: lg === 3,
    [styles.cols3xl]: xl === 3,
    [styles.cols4base]: base === 4,
    [styles.cols4md]: md === 4,
    [styles.cols4sm]: sm === 4,
    [styles.cols4lg]: lg === 4,
    [styles.cols4xl]: xl === 4,
    [styles.cols5base]: base === 5,
    [styles.cols5sm]: sm === 5,
    [styles.cols5md]: md === 5,
    [styles.cols5lg]: lg === 5,
    [styles.cols5xl]: xl === 5,
    [styles.cols6base]: base === 6,
    [styles.cols6sm]: sm === 6,
    [styles.cols6md]: md === 6,
    [styles.cols6lg]: lg === 6,
    [styles.cols6xl]: xl === 6,
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
