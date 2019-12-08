import { gql } from 'apollo-boost';

export const GET_USER = gql`
  query {
    user(_id: "5deab9ed470df97d3f67f206") {
      _id
      firstName
      lastName
      projectName
    }
  }
`;
