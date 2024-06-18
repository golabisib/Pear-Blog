import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql `
  query MyQuery {
  posts {
    slug
    id
    author {
      name
      avatar {
        url
      }
    }
    title
    coverPhoto {
      url
    }
  }
}

`;

export {GET_BLOGS_INFO} ;
