import { Formik } from 'formik';
import React from 'react';
import { View } from 'react-native';
import * as yup from 'yup';

import { SignInFormValues } from './SignInForm';
import SignInForm from './SignInForm';

const initialValues: SignInFormValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const onSubmit = (values: SignInFormValues) => {
  console.log(values);
};

const SignIn = (): JSX.Element => {
  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;