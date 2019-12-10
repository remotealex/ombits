import React from 'react';
import classNames from 'classnames';

import { MarginStyleKeys } from 'interfaces/MarginStyleKeys';
import { TextAlignOption } from 'interfaces/TextAlignOption';
import { Title } from 'components/Typography';
import { getMarginProps } from 'utils/helpers';
import styles from './Card.module.scss';

interface CardProps {
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
  onMouseOver?: () => void;
  style?: React.CSSProperties;
  textAlign?: TextAlignOption;
  title?: string;
}

export const Card: React.FC<CardProps & MarginStyleKeys> = props => {
  const { children, onClick, title, textAlign, style, onMouseOver } = props;
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
      onMouseOver={onMouseOver}
    >
      {title && (
        <Title as="h4" text={title} marginBottom={!!children ? 2 : 0} />
      )}
      {children}
    </div>
  );
};
