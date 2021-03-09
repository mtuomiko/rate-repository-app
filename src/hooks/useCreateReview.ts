import { useMutation } from '@apollo/client';

import { CREATE_REVIEW } from '../graphql/mutations';
import { NewReview } from '../types';

interface CreateReviewResponse {
  createReview: {
    repositoryId: string
  }
}

type NewReviewParams = Omit<NewReview, 'rating'> & { rating: number };

const useCreateReview = () => {
  const [mutate, result] = useMutation<
    CreateReviewResponse,
    NewReviewParams
  >(CREATE_REVIEW);

  const createReview = async (newReview: NewReview) => {
    const mutateResult = await mutate({
      variables: {
        repositoryName: newReview.repositoryName,
        ownerName: newReview.ownerName,
        rating: +newReview.rating,
        text: newReview.text,
      }
    });

    return mutateResult;
  };

  return [createReview, result] as const;
};

export default useCreateReview;