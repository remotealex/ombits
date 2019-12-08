import { gql } from 'apollo-boost';

import { allBits } from '../fragments/projects';

export const UPDATE_PROJECT_TITLE = gql`
  mutation updateProjectTitle($_id: ID!, $title: String!) {
    updateProjectTitle(_id: $_id, title: $title) {
      _id
      title
    }
  }
`;

export const UPDATE_PROJECT_BITS = gql`
  mutation updateProjectBits($_id: ID!, $bits: [BitInput]!) {
    updateProjectBits(_id: $_id, bits: $bits) {
      _id
      title
      ...AllBits
    }
  }
  ${allBits}
`;
