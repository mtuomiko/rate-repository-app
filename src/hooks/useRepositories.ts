import { useQuery } from '@apollo/client';

import { Repository } from '../types';
import { GET_REPOSITORIES } from '../graphql/queries';

interface RepositoriesResponse {
  repositories: {
    edges: Array<{
      node: Repository
    }>
  }
}

export interface OrderParams {
  orderBy: 'CREATED_AT' | 'RATING_AVERAGE';
  orderDirection: 'ASC' | 'DESC';
}

const useRepositories = (order: OrderParams) => {
  const { data, loading, refetch } = useQuery<RepositoriesResponse>(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: {
      orderBy: order?.orderBy,
      orderDirection: order?.orderDirection,
    },
  });

  return {
    repositories: data?.repositories,
    loading,
    refetch,
  };
};

export default useRepositories;