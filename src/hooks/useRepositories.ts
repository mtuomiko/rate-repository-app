
import { Repository } from '../types';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

interface RepositoryResponse {
  repositories: {
    edges: Array<{
      node: Repository
    }>
  }
}

const useRepositories = () => {
  const result = useQuery<RepositoryResponse>(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  return {
    repositories: result.data?.repositories,
    loading: result.loading,
    refetch: result.refetch,
  };
};

export default useRepositories;