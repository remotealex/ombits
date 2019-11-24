import React from 'react';

import { MarginStyleKeys } from 'interfaces/MarginStyleKeys';
import { getMarginProps } from 'utils/helpers';
import styles from './Wrapper.module.scss';

export const Wrapper: React.FC<MarginStyleKeys> = props => {
  const { children } = props;
  const marginProps = getMarginProps(props);

  return (
    <div className={styles.wrapper} style={marginProps}>
      {children}
    </div>
  );
};
