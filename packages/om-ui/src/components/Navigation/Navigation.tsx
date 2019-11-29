import React, { ReactNode } from 'react';

import styles from './Navigation.module.scss';

type NavigationProps = {
  logo?: ReactNode;
};

export const Navigation: React.FC<NavigationProps> = props => {
  const { logo, children } = props;

  return (
    <nav className={styles.navigation}>
      <div className={styles.navigationWrapper}>
        <div>{logo}</div>
        <ul className={styles.navigationList}>{children}</ul>
      </div>
    </nav>
  );
};
