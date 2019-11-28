import React from 'react';
import moment from 'moment';
// import classNames from 'classnames';

import { MarginStyleKeys } from 'interfaces/MarginStyleKeys';
import { getMarginProps } from 'utils/helpers';
import { dateTimeFormat, displayDateFormat } from 'constants/dates';
import styles from './Timeline.module.scss';

interface TimelineProps {
  date: Date;
}

export const Timeline: React.FC<TimelineProps & MarginStyleKeys> = props => {
  const { children, date } = props;
  const marginProps = getMarginProps(props);

  // Build the class names
  // const cls = classNames(styles.button, {
  //   [styles[`intent${toSentenceCase(intent)}`]]: intent,
  //   [styles.large]: size === 'large',
  // });

  const mDate = moment(date);
  const dateTime = mDate.format(dateTimeFormat);
  const displayDate = mDate.format(displayDateFormat);
  const [day, month] = displayDate.split(' ');
  const dayOnly = mDate.format('D');
  const timeAgo = mDate.fromNow();

  return (
    <section className={styles.timelineItem} style={marginProps}>
      <time className={styles.date} dateTime={dateTime}>
        <span className={styles.day}>{day}</span>
        <span className={styles.dayOnly}>{dayOnly}</span>
        <span className={styles.month}>{month}</span>
        <span className={styles.timeAgo}> - {timeAgo}</span>
      </time>
      <div className={styles.content}>{children}</div>
    </section>
  );
};
