import { useMutation } from '@apollo/client';

import { SIGN_UP } from '../graphql/mutations';

interface SignUpParams {
  username: string;
  password: string;
}

interface SignUpResponse {
  createUser: {
    id: string;
    username: string;
    createdAt: string;
  }
}

const useSignUp = () => {
  const [mutate, result] = useMutation<
    SignUpResponse,
    SignUpParams
  >(SIGN_UP);

  const signUp = async ({ username, password }: SignUpParams) => {
    const mutateResult = await mutate({ variables: { username, password } });

    return mutateResult;
  };

  return [signUp, result] as const;
};

export default useSignUp;