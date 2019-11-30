import React from 'react';
import { Title, Wrapper } from 'om-ui';

export const Planning = () => {
  return (
    <section>
      <Wrapper>
        <Title as="h2" text="Morning routine" marginBottom={3} />
      </Wrapper>

      <style jsx>{`
        section {
          padding-top: 80px;
        }
      `}</style>
    </section>
  );
};
