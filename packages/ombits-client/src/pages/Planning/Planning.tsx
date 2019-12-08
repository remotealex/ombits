import React from 'react';
import { Wrapper } from 'om-ui';
import { useQuery } from '@apollo/react-hooks';

import { GET_PROJECT } from '../../queries/projects';
import { BitsSection } from './BitsSection';
import { TitleSection } from './TitleSection';

interface Props {
  projectId: string;
}

export const Planning: React.FC<Props> = ({ projectId }) => {
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { _id: projectId },
  });

  if (loading || !data || !data.project) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;

  return (
    <section>
      <Wrapper>
        <TitleSection initialTitle={data.project.title} projectId={projectId} />
        <BitsSection bits={data.project.bits} projectId={projectId} />
      </Wrapper>

      <style jsx>{`
        section {
          padding-top: 80px;
        }
      `}</style>
    </section>
  );
};
