import React from 'react';

export const Footer = () => {
  return (
    <div>
      <time className="date" dateTime="">
        Thursday, 28th November 2019
      </time>
      <time className="time">20:13</time>

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
