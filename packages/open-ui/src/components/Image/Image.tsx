import React from 'react';
import classNames from 'classnames';

import { MarginStyleKeys } from 'interfaces/MarginStyleKeys';
import { BorderRadiusOption } from 'interfaces/BorderRadiusOption';
import { getMarginProps } from 'utils/helpers';
import styles from './Image.module.scss';
import { toSentenceCase } from 'utils/strings/to-sentence-case';

interface ImageProps {
  alt: string;
  borderRadius?: BorderRadiusOption;
  circle?: boolean;
  height?: string;
  src: string;
  width?: string;
}

export const Image: React.FC<ImageProps & MarginStyleKeys> = props => {
  const { src, borderRadius, width, height, circle, alt } = props;
  const marginProps = getMarginProps(props);

  // Build the class names
  const cls = classNames(styles.image, {
    [styles[`borderRadius${toSentenceCase(borderRadius)}`]]: borderRadius,
    [styles.circle]: circle,
  });

  return (
    <img
      alt={alt}
      className={cls}
      src={src}
      style={{ ...marginProps, width, height }}
    />
  );
};
