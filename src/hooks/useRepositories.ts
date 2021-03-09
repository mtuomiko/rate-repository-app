import { useQuery } from '@apollo/client';

import { Repository } from '../types';
import { GET_REPOSITORIES } from '../graphql/queries';

interface RepositoriesResponse {
  repositories: {
    edges: Array<{
      node: Repository;
    }>,
    pageInfo: {
      hasNextPage: boolean;
      totalCount: number;
      startCursor: string;
      endCursor: string;
    },
  }
}

export interface RepositoriesQueryVariables {
  orderBy: 'CREATED_AT' | 'RATING_AVERAGE';
  orderDirection: 'ASC' | 'DESC';
  searchKeyword: string;
  first: number;
}

const useRepositories = (variables: RepositoriesQueryVariables) => {
  const { data, loading, fetchMore } = useQuery<RepositoriesResponse>(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables,
  });

  const handleFetchMore = () => {
    const canFetchmore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchmore) {
      return;
    }

    fetchMore({
      variables: {
        after: data?.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return {
    repositories: data?.repositories,
    loading,
    fetchMore: handleFetchMore,
  };
};

export default useRepositories;