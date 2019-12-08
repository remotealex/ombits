import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import { MarginStyleKeys } from 'interfaces/MarginStyleKeys';
import { getMarginProps } from 'utils/helpers';
import { TitleType } from '../Title';
import titleStyles from '../Title/Title.module.scss';
import styles from './EditableTitle.module.scss';

type InputType = 'text' | 'number' | 'url' | 'email' | 'tel';

interface TitleProps {
  as: TitleType;
  inlineBlock?: boolean;
  onBlur?: (isChanged: boolean) => void;
  onChange: (value: string) => void;
  type?: InputType;
  value: string;
}

export const EditableTitle: React.FC<TitleProps & MarginStyleKeys> = props => {
  const { as, onChange, type, inlineBlock, value, onBlur } = props;

  // Store the initial value so we can see if the content has changed on blur
  const [initialValue, setInitialValue] = useState('');
  useEffect(() => {
    if (initialValue) {
      return;
    }
    setInitialValue(value);
  }, [value, initialValue, setInitialValue]);

  const marginProps = getMarginProps(props);
  const display = inlineBlock ? 'inline-block' : 'block';

  // Build the class names
  const cls = classNames(titleStyles.title, styles.editableTitle, [
    titleStyles[`title${as.toUpperCase()}`],
  ]);

  return (
    <input
      className={cls}
      onBlur={() => {
        if (onBlur) {
          const isChanged = initialValue !== value;
          onBlur(isChanged);
          setInitialValue('');
        }
      }}
      onChange={e => {
        onChange(e.currentTarget.value);
      }}
      style={{ ...marginProps, display }}
      type={type || 'text'}
      value={value}
    />
  );
};
