import { gql } from '@apollo/client';
import { USER_FIELDS } from './fragments';

export const SIGN_IN = gql`
  mutation signIn($username: String!, $password: String!) {
    authorize(credentials: {
      username: $username,
      password: $password
    }) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation createReview(
    $repositoryName: String!,
    $ownerName: String!,
    $rating: Int!,
    $text: String
  ) {
    createReview(review: {
      repositoryName: $repositoryName,
      ownerName: $ownerName,
      rating: $rating,
      text: $text
    }) {
      repositoryId
    }
  }
`;

export const SIGN_UP = gql`
  ${USER_FIELDS}
  mutation signUp($username: String!, $password: String!) {
    createUser(user: {
      username: $username,
      password: $password
    }) {
      ...UserFields
    }
  }
`;