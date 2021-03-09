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

export interface RepositoryQueryVariables {
  orderBy: 'CREATED_AT' | 'RATING_AVERAGE';
  orderDirection: 'ASC' | 'DESC';
  searchKeyword: string;
}

const useRepositories = (variables: RepositoryQueryVariables) => {
  const { data, loading, refetch } = useQuery<RepositoriesResponse>(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables,
  });

  return {
    repositories: data?.repositories,
    loading,
    refetch,
  };
};

export default useRepositories;