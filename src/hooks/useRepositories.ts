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
  const { data, loading, refetch } = useQuery<RepositoryResponse>(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  return {
    repositories: data?.repositories,
    loading,
    refetch,
  };
};

export default useRepositories;