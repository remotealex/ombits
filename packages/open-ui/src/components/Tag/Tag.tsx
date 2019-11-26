import React from 'react';
import classNames from 'classnames';

import { MarginStyleKeys } from 'interfaces/MarginStyleKeys';
import { getMarginProps } from 'utils/helpers';

import styles from './Tag.module.scss';

interface TagProps {
  text: string;
  size?: 'large';
}

export const Tag: React.FC<TagProps & MarginStyleKeys> = props => {
  const { text, size } = props;
  const _props = { marginBottom: 0.5, marginRight: 0.5, ...props };
  const marginStyles = getMarginProps(_props);
  const cls = classNames(styles.tag, {
    [styles.large]: size === 'large',
  });
  return (
    <div style={{ ...marginStyles }} className={cls}>
      {text}
    </div>
  );
};
