import { gql } from 'apollo-boost';

export const GET_USER = gql`
  query($_id: ID!) {
    user(_id: $_id) {
      _id
      firstName
      lastName
      projects {
        _id
        title
        bits {
          _id
        }
      }
    }
  }
`;
