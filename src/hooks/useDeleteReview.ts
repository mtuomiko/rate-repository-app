import { useMutation } from '@apollo/client';

import { DELETE_REVIEW } from '../graphql/mutations';

const useDeleteReview = () => {
  const [mutate, result] = useMutation<
    { deleteReview: boolean },
    { id: string }
  >(DELETE_REVIEW);

  const deleteReview = async ({ id }: { id: string }) => {
    const mutateResult = await mutate({
      variables: {
        id,
      },
    });

    return mutateResult;
  };

  return [deleteReview, result] as const;
};

export default useDeleteReview;