import { gql } from 'apollo-boost';

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
  fragment BitParts on Bit {
    _id
    title
    level
  }

  query($_id: ID!) {
    project(_id: $_id) {
      _id
      title
      bits {
        ...BitParts
        bits {
          ...BitParts
          bits {
            ...BitParts
            bits {
              ...BitParts
              bits {
                ...BitParts
                bits {
                  ...BitParts
                  bits {
                    ...BitParts
                    bits {
                      ...BitParts
                      bits {
                        ...BitParts
                        bits {
                          ...BitParts
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
