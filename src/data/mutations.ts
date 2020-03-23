import { gql } from "apollo-boost";

const CREATE_CASE: any = gql`
  mutation CREATE_CASE($author: String!, $title: String) {
    insert_Cases(objects: { author: $author, title: $title }) {
      returning {
        id
        author
        title
        created
      }
    }
  }
`;

export { CREATE_CASE };
