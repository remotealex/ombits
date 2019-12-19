import { NormalizedBitsObject } from '../interfaces/bits';
import { denormalizeBits } from './normalize-bits';
import { graphqlClient } from '../index';
import { UPDATE_PROJECT_BITS } from '../mutations/projects';
import { omitDeep } from './omit-deep';

export const updateProject = async (
  projectId: string,
  bits: NormalizedBitsObject,
  result: string[],
) => {
  const dBits = denormalizeBits(result, { bits });
  await graphqlClient.mutate({
    mutation: UPDATE_PROJECT_BITS,
    variables: {
      _id: projectId,
      // Remove the __typename prop that has been injected
      bits: dBits.map(b => omitDeep(b, '__typename')),
    },
  });
};
