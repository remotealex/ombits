import { gql } from 'apollo-boost';

export const allBits = gql`
  fragment BitParts on Bit {
    _id
    title
    level
    isComplete
  }

  fragment AllBits on Project {
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
`;
