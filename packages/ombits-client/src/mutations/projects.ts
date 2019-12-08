import { gql } from 'apollo-boost';

export const UPDATE_PROJECT_TITLE = gql`
  mutation updateProjectTitle($_id: String!, $title: String!) {
    updateProjectName(_id: $_id, title: $title) {
      _id
      title
    }
  }
`;
