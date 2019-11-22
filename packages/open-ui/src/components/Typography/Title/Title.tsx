import React from 'react';
import classNames from 'classnames';

import { MarginStyles } from 'interfaces/MarginStyles';
import { verticalRhythm } from 'constants/styles';
import styles from './Title.module.scss';

type TitleTypes = 'h1' | 'h2' | 'h3' | 'h4';

interface TitleProps {
  as: TitleTypes;
  text: string;
}

export const Title: React.FC<TitleProps & MarginStyles> = props => {
  const { as: Component, text, ...styleProps } = props;

  // Build the class names
  const cls = classNames(styles.title);

  // Build up the margin styles using our vertical rhythm
  const _styleProps = {} as any;
  Object.entries(styleProps).map(([key, value]: [string, number]) => {
    return (_styleProps[key] = value * verticalRhythm + 'px');
  });

  return (
    <Component className={cls} style={_styleProps}>
      {text}
    </Component>
  );
};
