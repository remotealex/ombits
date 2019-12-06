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
          background: #16161a;
          border-radius: 99px;
          bottom: 0;
          font-size: 14px;
          left: 50%;
          padding: 16px;
          position: fixed;
          text-align: center;
          transform: translateX(-50%);
          z-index: 99;
        }

        time {
          color: rgba(255, 255, 255, 0.2);
          display: block;
        }

        .date {
          color: rgba(255, 255, 255, 0.2);
          margin-bottom: 8px;
        }
      `}</style>
    </div>
  );
};
