import React, { ReactNode } from 'react';
import classNames from 'classnames';

import { MarginStyleKeys } from 'interfaces/MarginStyleKeys';
import { getMarginProps } from 'utils/helpers';
import { ColSizeProps } from 'interfaces/ColumnOptions';
import styles from './AutoGrid.module.scss';

interface AutoGridProps extends ColSizeProps {
  gutters?: boolean;
  overflowFill?: boolean;
}

export const AutoGrid: React.FC<AutoGridProps & MarginStyleKeys> = props => {
  const { children, base, sm, md, lg, xl, gutters, overflowFill } = props;
  const marginProps = getMarginProps(props);

  // Build the class names
  const cls = classNames(
    styles.autoGrid,
    styles[`colBase${base}`],
    styles[`colSmall${sm}`],
    styles[`colMedium${md}`],
    styles[`colLarge${lg}`],
    styles[`colXlarge${xl}`],
    {
      [styles.cols]: base || sm || md || lg || xl,
      [styles.gutters]: gutters,
      [styles.overflowFill]: overflowFill,
    },
  );

  const _children = React.Children.toArray(children);

  return (
    <div className={cls} style={marginProps}>
      {_children.map((child: ReactNode, idx: number) => (
        <div key={idx}>{child}</div>
      ))}
    </div>
  );
};
