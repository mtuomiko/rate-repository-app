import { gql } from '@apollo/client';
import { REPOSITORY_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
  ${REPOSITORY_FIELDS}
  query {
    repositories {
      edges {
        node {
          ...RepositoryFields
        }
      }
    }
  }
`;

export const AUTHORIZED_USER = gql`
  query {
    authorizedUser {
      id
      username
    }
  }
`;

export const GET_ONE_REPOSITORY = gql`
  ${REPOSITORY_FIELDS}
  query getRepository($id: ID!) {
    repository(id: $id) {
      ...RepositoryFields
    }
  }
`;