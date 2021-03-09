import { gql } from '@apollo/client';
import { REPOSITORY_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
  ${REPOSITORY_FIELDS}
  query getRepositories(
    $orderBy: AllRepositoriesOrderBy,
    $orderDirection: OrderDirection,
    $searchKeyword: String,
    $after: String,
    $first: Int
  ){repositories(
    orderBy: $orderBy,
    orderDirection: $orderDirection,
    searchKeyword: $searchKeyword,
    after: $after,
    first: $first
  ) {
      edges {
        node {
          ...RepositoryFields
        }
      }
      pageInfo {
        hasNextPage
        totalCount
        startCursor
        endCursor
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

export const GET_SINGLE_REPOSITORY = gql`
  ${REPOSITORY_FIELDS}
  query getRepository($id: ID!, $first: Int, $after: String) {
    repository(id: $id) {
      ...RepositoryFields
      reviews(first: $first, after: $after) {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
`;

