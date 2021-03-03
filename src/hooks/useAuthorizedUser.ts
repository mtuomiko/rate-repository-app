import { useQuery } from '@apollo/client';
import { AUTHORIZED_USER } from '../graphql/queries';

interface AuthorizedUser {
  id: string;
  username: string;
}

interface AuthorizedUserResponse {
  authorizedUser: AuthorizedUser;
}

const useAuthorizedUser = () => {
  const { data } = useQuery<AuthorizedUserResponse>(AUTHORIZED_USER, {
    fetchPolicy: 'cache-and-network',
  });

  return {
    authorizedUser: data?.authorizedUser,
  };
};

export default useAuthorizedUser;