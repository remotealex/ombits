import React from 'react';
import classNames from 'classnames';

import { MarginStyles } from 'interfaces/MarginStyles';
import { verticalRhythm } from 'constants/styles';
import styles from './Button.module.scss';

type colors = 'primary' | 'secondary';

interface ButtonProps {
  color?: colors;
  text: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps & MarginStyles> = props => {
  const { color, text, onClick, ...styleProps } = props;

  // Build the class names
  const cls = classNames(styles.button, {
    [styles.primary]: color === 'primary',
    [styles.secondary]: color === 'secondary',
  });

  // Build up the margin styles using our vertical rhythm
  const _styleProps = {} as any;
  Object.entries(styleProps).map(([key, value]: [string, number]) => {
    _styleProps[key] = value * verticalRhythm + 'px';
  });

  return (
    <button
      className={cls}
      style={_styleProps}
      onClick={e => {
        e.preventDefault();
        e.stopPropagation();
        e.currentTarget.blur();
        onClick();
      }}
    >
      {text}
    </button>
  );
};
