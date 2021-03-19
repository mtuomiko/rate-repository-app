import React from "react";
import { Formik } from 'formik';
import { View } from "react-native";
import * as yup from 'yup';
import { useHistory } from "react-router-native";

import useCreateReview from "../hooks/useCreateReview";
import { NewReview } from "../types";
import CreateReviewForm from "./CreateReviewForm";

const initialValues: NewReview = {
  repositoryName: '',
  ownerName: '',
  rating: '',
  text: undefined,
};

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required('Repository owner name is required'),
  repositoryName: yup
    .string()
    .required('Repository name is required'),
  rating: yup
    .number()
    .required('Rating is required')
    .min(0, 'Rating must be between 0-100')
    .max(100, 'Rating must be between 0-100')
    .integer('Rating must be an integer'),
  text: yup
    .string(),
});

export const CreateReviewContainer = ({ onSubmit }: {
  onSubmit: (values: NewReview) => Promise<void>
}) => {
  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

const CreateReview = () => {
  const [createReview] = useCreateReview();
  const history = useHistory();

  const onSubmit = async (values: NewReview) => {
    try {
      const { data } = await createReview(values);
      console.log(data);
      if (data?.createReview.repositoryId) {
        history.push(`/repository/${data.createReview.repositoryId}`);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <CreateReviewContainer onSubmit={onSubmit} />
  );
};

export default CreateReview;