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

const useRepositories = () => {
  const { data, loading, refetch } = useQuery<RepositoriesResponse>(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  return {
    repositories: data?.repositories,
    loading,
    refetch,
  };
};

export default useRepositories;