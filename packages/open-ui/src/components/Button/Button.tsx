import React from 'react';
import classNames from 'classnames';

import { MarginStyleKeys } from 'interfaces/MarginStyleKeys';
import { StyleTypeOption } from 'interfaces/StyleTypeOption';
import { SizeOption } from 'interfaces/SizeOption';
import { getMarginProps } from 'utils/helpers';
import styles from './Button.module.scss';

interface ButtonProps {
  type?: StyleTypeOption;
  size?: SizeOption;
  text: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps & MarginStyleKeys> = props => {
  const { type, text, size, onClick } = props;
  const marginProps = getMarginProps(props);

  // Build the class names
  const cls = classNames(styles.button, {
    [styles.primary]: type === 'primary',
    [styles.secondary]: type === 'secondary',
    [styles.large]: size === 'large',
  });

  return (
    <button
      className={cls}
      style={marginProps}
      onClick={e => {
        e.preventDefault();
        e.stopPropagation();
        e.currentTarget.blur();
        onClick();
        return null;
      }}
    >
      {text}
    </button>
  );
};
