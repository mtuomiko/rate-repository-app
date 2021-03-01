import { useState, useEffect } from 'react';
import { Platform } from 'react-native';

import { Repository } from '../components/types';

interface RepositoryResponse {
  pageInfo?: {
    totalCount: number,
    hasNextPage: boolean,
    endCursor: string,
    startCursor: string,
  },
  edges?: Array<{
    node: Repository,
    cursor: string,
  }>
}

const useRepositories = (): {
  repositories: RepositoryResponse | undefined;
  loading: boolean;
  refetch: () => Promise<void>;
} => {
  const [repositories, setRepositories] = useState<RepositoryResponse>();
  const [loading, setLoading] = useState(false);

  // For WSL2 dev environment. Native clients need the real local IP, web 
  // client can access WSL with its localhost since running on the same 
  // machine.
  const apiHost = Platform.select({
    web: 'localhost',
    default: '192.168.1.189',
  });

  const apiUrl = `http://${apiHost}:5000/api/repositories`;

  const fetchRepositories = async () => {
    try {
      setLoading(true);

      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Error');
      }
      const json: RepositoryResponse = await response.json();

      setLoading(false);
      setRepositories(json);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;