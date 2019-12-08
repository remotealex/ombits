import { gql } from 'apollo-boost';

export const GET_PROJECTS = gql`
  query {
    projects {
      _id
      title
    }
  }
`;

export const GET_PROJECT = gql`
  query($_id: ID!) {
    project(_id: $_id) {
      _id
      title
    }
  }
`;
