import { gql } from '@apollo/client';

export const COUNTRIES_QUERY = gql`
  query Countries($codes: [String!]) {
    countries(filter: { code: { in: $codes } }) {
      code
      name
      native
      phone
      capital
      currency
      languages {
        name
        native
        rtl
      }
      continent {
        name
      }
      emoji
      states {
        name
      }
    }
  }
`;
