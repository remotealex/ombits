import React from 'react';
import classNames from 'classnames';

import { MarginStyleKeys } from 'interfaces/MarginStyleKeys';
import { getMarginProps } from 'utils/helpers';
import styles from './Grid.module.scss';

interface GridProps {
  gutters?: boolean;
}

export const Grid: React.FC<GridProps & MarginStyleKeys> = props => {
  const { children, gutters } = props;
  const marginProps = getMarginProps(props);

  const cls = classNames(styles.grid, {
    [styles.gutters]: gutters,
  });

  return (
    <section className={cls} style={marginProps}>
      {children}
    </section>
  );
};
