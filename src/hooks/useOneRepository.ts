import { useQuery } from '@apollo/client';

import { Repository } from '../types';
import { GET_ONE_REPOSITORY } from '../graphql/queries';

interface OneRepositoryResponse {
  repository: Repository;
}

interface QueryParams {
  id: string;
}

const useOneRepository = (id: string) => {
  const { data } = useQuery<
    OneRepositoryResponse,
    QueryParams
  >(GET_ONE_REPOSITORY,
    {
      fetchPolicy: 'cache-and-network',
      variables: { id }
    }
  );

  return {
    repository: data?.repository,
  };

};

export default useOneRepository;