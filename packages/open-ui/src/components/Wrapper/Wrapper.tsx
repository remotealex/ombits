import React from 'react';

import { MarginStyles } from 'interfaces/MarginStyles';
import { verticalRhythm } from 'constants/styles';
import styles from './Wrapper.module.scss';

export const Wrapper: React.FC<MarginStyles> = props => {
  const { children, ...styleProps } = props;

  // Build up the margin styles using our vertical rhythm
  const _styleProps = {} as any;
  Object.entries(styleProps).map(([key, value]: [string, number]) => {
    return (_styleProps[key] = value * verticalRhythm + 'px');
  });

  return (
    <div className={styles.wrapper} style={_styleProps}>
      {children}
    </div>
  );
};
