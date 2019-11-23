import React from 'react';
import classNames from 'classnames';

import { MarginStyles } from 'interfaces/MarginStyles';
import { Title } from 'components/Typography';
import { verticalRhythm } from 'constants/styles';
import styles from './Card.module.scss';

interface CardProps {
  title?: string;
}

export const Card: React.FC<CardProps & MarginStyles> = props => {
  const { children, title, ...styleProps } = props;

  // Build the class names
  const cls = classNames(styles.card);

  // Build up the margin styles using our vertical rhythm
  const _styleProps = {} as any;
  Object.entries(styleProps).map(([key, value]: [string, number]) => {
    return (_styleProps[key] = value * verticalRhythm + 'px');
  });

  return (
    <div className={cls} style={_styleProps}>
      {title && <Title as="h4" text={title} marginBottom={1} />}
      {children}
    </div>
  );
};
