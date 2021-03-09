import { useQuery } from '@apollo/client';

import { Repository } from '../types';
import { GET_SINGLE_REPOSITORY } from '../graphql/queries';

interface SingleRepositoryResponse {
  repository: Repository,
}

interface SingleRepositoryQueryVariables {
  id: string;
  first: number;
}

const useSingleRepository = (variables: SingleRepositoryQueryVariables) => {
  const { data, loading, fetchMore } = useQuery<
    SingleRepositoryResponse,
    SingleRepositoryQueryVariables
  >(GET_SINGLE_REPOSITORY,
    {
      fetchPolicy: 'cache-and-network',
      variables,
    }
  );

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews?.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data?.repository.reviews?.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return {
    repository: data?.repository,
    loading,
    fetchMore: handleFetchMore,
  };

};

export default useSingleRepository;