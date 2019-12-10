import React from 'react';
import { useQuery } from 'react-apollo';

import { GET_PROJECT } from '../../queries/projects';
// import { flattenBits } from '../../utils/flatten-bits';
import { FocusSection } from './FocusSection';

interface Props {
  projectId: string;
}

export const Focus: React.FC<Props> = ({ projectId }) => {
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { _id: projectId },
  });

  if (loading || !data || !data.project) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;

  return (
    <section>
      <FocusSection project={data.project} bits={data.project.bits} />

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
