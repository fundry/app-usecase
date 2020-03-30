import { gql } from 'apollo-boost';

const GET_USECASES = gql`
  query {
    Usecases(
      where: { author: { _eq: "1b519f7e-4909-11ea-b77f-2e728ce88125" } }
    ) {
      id
      author
      created
      title
      content
    }
  }
`;

const GET_CASES = gql`
  query {
    Cases(where: { author: { _eq: "Nwani Victory" } }) {
      author
      name
      created
    }
  }
`;

export { GET_CASES, GET_USECASES };
