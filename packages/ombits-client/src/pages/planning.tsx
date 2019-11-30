import React from 'react';

import { Button, Text, Title } from 'om-ui';

export const Planning = () => {
  return (
    <section>
      <div>
        <Text as="p" text="Build home page" marginBottom={1} />
        <Title as="h1" text="Open design" marginBottom={4} />
        <div className="done">
          <Button intent="primary" text="Done" marginBottom={1} size="large" />
        </div>
        <Button text="Skip" />
      </div>

      <style jsx>{`
        section {
          align-items: center;
          bottom: 0;
          display: flex;
          justify-content: center;
          position: absolute;
          text-align: center;
          top: 0;
          width: 100%;
        }
      `}</style>
    </section>
  );
};
