import { useMutation, useApolloClient } from '@apollo/client';

import { SIGN_IN } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';

interface AuthorizeInput {
  username: string;
  password: string;
}

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const client = useApolloClient();

  const [mutate, result] = useMutation<
    {
      authorize: {
        accessToken: string,
      }
    },
    AuthorizeInput
  >(SIGN_IN);

  const signIn = async ({ username, password }: AuthorizeInput) => {
    const result = await mutate({ variables: { username, password } });
    if (result.data?.authorize.accessToken) {
      await authStorage.setAccessToken(result.data?.authorize.accessToken);
    }
    client.resetStore();

    return result;
  };

  return [signIn, result] as const;
};

export default useSignIn;