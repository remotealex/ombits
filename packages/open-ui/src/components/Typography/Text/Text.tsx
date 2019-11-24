import React from 'react';
import classNames from 'classnames';

import { MarginStyleKeys } from 'interfaces/MarginStyleKeys';
import { getMarginProps } from 'utils/helpers';
import styles from './Text.module.scss';

type TitleTypes = 'p' | 'span';

interface TextProps {
  as?: TitleTypes;
  text?: string;
}

export const Text: React.FC<TextProps & MarginStyleKeys> = props => {
  const { as, children, text } = props;
  const marginProps = getMarginProps(props);

  // The default component is a paragraph
  const Component = as || 'p';

  // Build the class names
  const cls = classNames(styles.text);

  return (
    <Component className={cls} style={marginProps}>
      {children || text}
    </Component>
  );
};
