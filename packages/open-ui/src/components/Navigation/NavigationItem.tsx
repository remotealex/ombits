import React, { ReactNode } from 'react';

import styles from './NavigationItem.module.scss';

type NavigationItemProps = {
  text?: string;
  href?: string;
  link?: ReactNode;
};

export const NavigationItem: React.FC<NavigationItemProps> = props => {
  const { text, href, link } = props;

  return (
    <li className={styles.navigationItem}>
      {link ? link : <a href={href}>{text}</a>}
    </li>
  );
};
