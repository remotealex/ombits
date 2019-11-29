import React from 'react';
import classNames from 'classnames';

import { MarginStyleKeys } from 'interfaces/MarginStyleKeys';
import { IntentOption } from 'interfaces/IntentOption';
import { getMarginProps } from 'utils/helpers';
import { toSentenceCase } from 'utils/strings/to-sentence-case';
import styles from './Tag.module.scss';

interface TagProps {
  intent?: IntentOption;
  size?: 'large';
  text: string;
}

export const Tag: React.FC<TagProps & MarginStyleKeys> = props => {
  const { intent, size, text } = props;
  const marginStyles = getMarginProps(props);

  const cls = classNames(styles.tag, {
    [styles.large]: size === 'large',
    [styles[`intent${toSentenceCase(intent)}`]]: intent,
  });

  return (
    <div style={marginStyles} className={cls}>
      {text}
    </div>
  );
};
