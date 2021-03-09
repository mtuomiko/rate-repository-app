import { useQuery } from '@apollo/client';
import { GET_AUTHORIZED_USER } from '../graphql/queries';
import { Review } from '../types';

interface AuthorizedUser {
  id: string;
  username: string;
  reviews?: {
    edges: Array<{
      node: Review
    }>;
    pageInfo: {
      endCursor: string;
      startCursor: string;
      hasNextPage: boolean;
    }
  }
}

interface AuthorizedUserResponse {
  authorizedUser: AuthorizedUser;
}

const useAuthorizedUser = ({ includeReviews } = { includeReviews: false }) => {
  const { data, refetch } = useQuery<AuthorizedUserResponse>(GET_AUTHORIZED_USER, {
    fetchPolicy: 'cache-and-network',
    variables: {
      includeReviews,
    },
  });

  return {
    authorizedUser: data?.authorizedUser,
    refetch,
  };
};

export default useAuthorizedUser;