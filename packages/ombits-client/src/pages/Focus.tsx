import React from 'react';
import { useQuery } from 'react-apollo';

import { Button, Text, Title } from 'om-ui';
import { GET_PROJECT } from '../queries/projects';

interface Props {
  projectId: string;
}

export const Focus: React.FC<Props> = ({ projectId }) => {
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { _id: projectId },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;

  return (
    <section>
      <div>
        <Text as="p" text={data.project.title} marginBottom={1} />
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
