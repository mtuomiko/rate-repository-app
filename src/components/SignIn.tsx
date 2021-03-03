import { Formik } from 'formik';
import React from 'react';
import { View } from 'react-native';
import * as yup from 'yup';
import { useHistory } from 'react-router-native';

import SignInForm, { SignInFormValues } from './SignInForm';
import useSignIn from '../hooks/useSignIn';

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

const SignIn = (): JSX.Element => {
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values: SignInFormValues) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log(data);
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

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