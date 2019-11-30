import React from 'react';
import classNames from 'classnames';

import { MarginStyleKeys } from 'interfaces/MarginStyleKeys';
import { TextAlignOption } from 'interfaces/TextAlignOption';
import { Title } from 'components/Typography';
import { getMarginProps } from 'utils/helpers';
import styles from './Card.module.scss';

interface CardProps {
  title?: string;
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
  textAlign?: TextAlignOption;
  style?: React.CSSProperties;
}

export const Card: React.FC<CardProps & MarginStyleKeys> = props => {
  const { children, onClick, title, textAlign, style } = props;
  const marginProps = getMarginProps(props);

  // Build the class names
  const cls = classNames(styles.card, {
    [styles.clickable]: !!onClick,
  });

  return (
    <div
      className={cls}
      style={{ ...marginProps, textAlign, ...style }}
      onClick={onClick}
    >
      {title && (
        <Title as="h4" text={title} marginBottom={!!children ? 2 : 0} />
      )}
      {children}
    </div>
  );
};
