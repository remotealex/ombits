import React from 'react';
import classNames from 'classnames';

import { MarginStyleKeys } from 'interfaces/MarginStyleKeys';
import { Title } from 'components/Typography';
import { getMarginProps } from 'utils/helpers';
import styles from './Card.module.scss';

interface CardProps {
  title?: string;
}

export const Card: React.FC<CardProps & MarginStyleKeys> = props => {
  const { children, title } = props;
  const marginProps = getMarginProps(props);

  // Build the class names
  const cls = classNames(styles.card);

  return (
    <div className={cls} style={marginProps}>
      {title && (
        <Title as="h4" text={title} marginBottom={!!children ? 1 : 0} />
      )}
      {children}
    </div>
  );
};
