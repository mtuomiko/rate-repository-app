import { useQuery } from '@apollo/client';

import { Repository } from '../types';
import { GET_SINGLE_REPOSITORY } from '../graphql/queries';

interface SingleRepositoryResponse {
  repository: Repository
}

interface QueryParams {
  id: string;
}

const useSingleRepository = (id: string) => {
  const { data } = useQuery<
    SingleRepositoryResponse,
    QueryParams
  >(GET_SINGLE_REPOSITORY,
    {
      fetchPolicy: 'cache-and-network',
      variables: { id }
    }
  );

  return {
    repository: data?.repository,
  };

};

export default useSingleRepository;