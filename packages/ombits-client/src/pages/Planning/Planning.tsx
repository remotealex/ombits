import React, { useState, useEffect } from 'react';
import { EditableTitle, Wrapper } from 'om-ui';
import { useQuery, useMutation } from '@apollo/react-hooks';
import NProgress from 'nprogress';

import { GET_PROJECT } from '../../queries/projects';
import { UPDATE_PROJECT_TITLE } from '../../mutations/projects';
import { BitsSection } from './BitsSection';

interface Props {
  projectId: string;
}

export const Planning: React.FC<Props> = ({ projectId }) => {
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { _id: projectId },
  });
  const [updateTitle] = useMutation(UPDATE_PROJECT_TITLE);

  const [title, setTitle] = useState('');

  // Populate the state once data has loaded
  useEffect(() => {
    if (data && data.project) {
      setTitle(data.project.title);
    }
  }, [data]);

  if (loading || !data || !data.project) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;

  return (
    <section>
      <Wrapper>
        <div className="editable-title--full-width">
          <EditableTitle
            as="h2"
            value={title}
            marginBottom={3}
            onChange={setTitle}
            onBlur={async (isChanged: boolean) => {
              if (isChanged) {
                NProgress.start();
                await updateTitle({ variables: { projectName: title } });
                NProgress.done();
              }
            }}
          />
        </div>
        <BitsSection bits={data.project.bits} />
      </Wrapper>

      <style jsx>{`
        section {
          padding-top: 80px;
        }
      `}</style>
      <style jsx global>{`
        .editable-title--full-width > input {
          width: 100%;
        }
      `}</style>
    </section>
  );
};
