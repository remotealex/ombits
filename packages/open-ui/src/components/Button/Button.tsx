import React from 'react';
import classNames from 'classnames';

import { MarginStyles } from 'interfaces/MarginStyles';
import { StyleTypeOption } from 'interfaces/StyleTypeOption';
import { SizeOption } from 'interfaces/SizeOption';
import { verticalRhythm } from 'constants/styles';
import styles from './Button.module.scss';

interface ButtonProps {
  type?: StyleTypeOption;
  size?: SizeOption;
  text: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps & MarginStyles> = props => {
  const { type, text, size, onClick, ...styleProps } = props;

  // Build the class names
  const cls = classNames(styles.button, {
    [styles.primary]: type === 'primary',
    [styles.secondary]: type === 'secondary',
    [styles.large]: size === 'large',
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
