import { useMutation } from '@apollo/client';
import { SIGN_IN } from '../graphql/mutations';

interface AuthorizeInput {
  username: string;
  password: string;
}

const useSignIn = () => {
  const [mutate, result] = useMutation<
    {
      authorize: {
        accessToken: string,
      }
    },
    AuthorizeInput
  >(SIGN_IN
  );

  const signIn = async ({ username, password }: AuthorizeInput) => {
    return mutate({ variables: { username, password } });
  };

  return [signIn, result] as const;
};

export default useSignIn;