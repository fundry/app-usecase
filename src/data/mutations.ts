import { gql } from 'apollo-boost';

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

const Create_UseCase: any = gql`
  mutation create_usecase(
    $author: String
    $title: String
    $content: String
    $images: String
    $tags: String
    $created: String
  ) {
    insert_Usecases(
      objects: {
        author: $author
        title: $title
        content: $content
        created: $created
        images: $images
        tags: $tags
      }
    ) {
      returning {
        id
        author
        content
      }
    }
  }
`;

const Delete_Case = gql`
  mutation delete_case {
    delete_Cases(where: { id: { _eq: 8 } }) {
      returning {
        name
      }
    }
  }
`;

export { CREATE_CASE, Create_UseCase };
