import { gql } from "@apollo/client";

export const REPOSITORY_FIELDS = gql`
  fragment RepositoryFields on Repository {
    id,
    fullName,
    description,
    language,
    ownerAvatarUrl,
    stargazersCount,
    forksCount,
    reviewCount,
    ratingAverage
  }
`;

export const USER_FIELDS = gql`
  fragment UserFields on User {
    id,
    username,
    createdAt
  }
`;