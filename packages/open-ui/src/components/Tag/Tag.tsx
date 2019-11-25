import React from 'react';
import classNames from 'classnames';

import { MarginStyleKeys } from 'interfaces/MarginStyleKeys';
import { getMarginProps } from 'utils/helpers';

import styles from './Tag.module.scss';

interface TagProps {
  name: string;
  size?: 'small' | 'large';
}

export const Tag: React.FC<TagProps & MarginStyleKeys> = ({
  name,
  size = 'small',
  marginBottom = 0.5,
  marginRight = 0.5,
}) => {
  const cls = classNames(styles.Tag, {
    [styles.large]: size === 'large',
  });
  return <div className={cls}>{name}</div>;
};
