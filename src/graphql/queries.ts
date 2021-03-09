import { gql } from '@apollo/client';
import { REPOSITORY_FIELDS, REVIEW_FIELDS } from './fragments';

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

export const GET_AUTHORIZED_USER = gql`
  ${REVIEW_FIELDS}
  query getAuthorizedUser($includeReviews: Boolean = false) {
    authorizedUser {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            ...ReviewFields
          }
        }
      }
    }
  }
`;

export const GET_SINGLE_REPOSITORY = gql`
  ${REPOSITORY_FIELDS}
  ${REVIEW_FIELDS}
  query getRepository($id: ID!, $first: Int, $after: String) {
    repository(id: $id) {
      ...RepositoryFields
      reviews(first: $first, after: $after) {
        edges {
          node {
            ...ReviewFields
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

