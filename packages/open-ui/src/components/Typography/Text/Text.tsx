import React from 'react';
import classNames from 'classnames';

import { MarginStyles } from 'interfaces/MarginStyles';
import { verticalRhythm } from 'constants/styles';
import styles from './Text.module.scss';

type TitleTypes = 'p' | 'span';

interface TextProps {
  as?: TitleTypes;
  text?: string;
}

export const Text: React.FC<TextProps & MarginStyles> = props => {
  const { as, children, text, ...styleProps } = props;

  // The default component is a paragraph
  const Component = as || 'p';

  // Build the class names
  const cls = classNames(styles.text);

  // Build up the margin styles using our vertical rhythm
  const _styleProps = {} as any;
  Object.entries(styleProps).map(([key, value]: [string, number]) => {
    return (_styleProps[key] = value * verticalRhythm + 'px');
  });

  return (
    <Component className={cls} style={_styleProps}>
      {children || text}
    </Component>
  );
};
