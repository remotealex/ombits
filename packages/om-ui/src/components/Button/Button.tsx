import React from 'react';
import classNames from 'classnames';

import { MarginStyleKeys } from 'interfaces/MarginStyleKeys';
import { IntentOption } from 'interfaces/IntentOption';
import { SizeOption } from 'interfaces/SizeOption';
import { getMarginProps } from 'utils/helpers';
import { toSentenceCase } from 'utils/strings/to-sentence-case';
import styles from './Button.module.scss';

interface ButtonProps {
  intent?: IntentOption;
  onClick: () => void;
  size?: SizeOption;
  text: string;
}

export const Button: React.FC<ButtonProps & MarginStyleKeys> = props => {
  const { intent, text, size, onClick } = props;
  const marginProps = getMarginProps(props);

  // Build the class names
  const cls = classNames(styles.button, {
    [styles[`intent${toSentenceCase(intent)}`]]: intent,
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
