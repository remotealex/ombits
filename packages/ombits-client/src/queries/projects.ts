import { gql } from 'apollo-boost';

import { allBits } from '../fragments/projects';

export const GET_PROJECTS = gql`
  query {
    projects {
      _id
      title
      bits {
        _id
      }
    }
  }
`;

export const GET_PROJECT = gql`
  query($_id: ID!) {
    project(_id: $_id) {
      _id
      title
      ...AllBits
    }
  }
  ${allBits}
`;
