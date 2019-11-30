import React, { useState } from 'react';
import { useInterval } from 'react-use';
import { DateTime } from 'luxon';

export const Footer = () => {
  const dt = DateTime.local();
  const [{ date, time }, setDatetime] = useState({
    date: dt.toLocaleString(DateTime.DATE_HUGE),
    time: dt.toLocaleString(DateTime.TIME_SIMPLE),
  });

  useInterval(() => {
    setDatetime({
      date: dt.toLocaleString(DateTime.DATE_HUGE),
      time: dt.toLocaleString(DateTime.TIME_SIMPLE),
    });
  }, 1000);

  return (
    <div>
      <time className="date" dateTime="">
        {date}
      </time>
      <time className="time">{time}</time>

      <style jsx>{`
        div {
          bottom: 0;
          font-size: 14px;
          opacity: 0.2;
          padding: 16px;
          position: absolute;
          text-align: center;
          width: 100%;
        }

        time {
          display: block;
        }

        .date {
          margin-bottom: 8px;
        }
      `}</style>
    </div>
  );
};
