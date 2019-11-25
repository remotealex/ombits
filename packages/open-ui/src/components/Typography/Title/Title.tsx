import React from 'react';
import classNames from 'classnames';

import { MarginStyleKeys } from 'interfaces/MarginStyleKeys';
import { getMarginProps } from 'utils/helpers';
import styles from './Title.module.scss';

type TitleTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

interface TitleProps {
  as: TitleTypes;
  text: string;
}

export const Title: React.FC<TitleProps & MarginStyleKeys> = props => {
  const { as: Component, text } = props;
  const marginProps = getMarginProps(props);

  // Build the class names
  const cls = classNames(styles.title);

  return (
    <Component className={cls} style={marginProps}>
      {text}
    </Component>
  );
};
