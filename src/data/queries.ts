import { gql } from 'apollo-boost';

const UseCase = gql`
  query {
    Usecases(where: { id: { _eq: 2 } }) {
      id
      author
      created
      title
      content
    }
  }
`;

const Cases = gql`
  query {
    Cases(where: { author: { _eq: "Nwani Victory" } }) {
      author
      name
      created
    }
  }
`;

export { UseCase, Cases };
