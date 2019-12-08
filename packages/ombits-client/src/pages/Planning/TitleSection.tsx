import React, { useState } from 'react';
import { EditableTitle } from 'om-ui';
import { useMutation } from '@apollo/react-hooks';
import NProgress from 'nprogress';

import { UPDATE_PROJECT_TITLE } from '../../mutations/projects';

interface Props {
  initialTitle: string;
  projectId: string;
}

export const TitleSection: React.FC<Props> = ({ initialTitle, projectId }) => {
  const [updateTitle] = useMutation(UPDATE_PROJECT_TITLE);
  const [title, setTitle] = useState(initialTitle);

  return (
    <div className="editable-title--full-width">
      <EditableTitle
        as="h2"
        value={title}
        marginBottom={3}
        onChange={setTitle}
        onBlur={async (isChanged: boolean) => {
          if (isChanged) {
            NProgress.start();
            await updateTitle({
              variables: { _id: projectId, title },
            });
            NProgress.done();
          }
        }}
      />

      <style jsx global>{`
        .editable-title--full-width > input {
          width: 100%;
        }
      `}</style>
    </div>
  );
};
