import { gql } from "apollo-boost";

const GET_CASE = gql`
  {
    Cases(where: { id: 1 }) {
      author
      title
      created
    }
  }
`;

const ALL_CASES = gql`
  query GET_CASE {
    Cases {
      id
      author
      title
      created
    }
  }
`;

export { GET_CASE, ALL_CASES };
