import React from 'react';
import { Formik } from 'formik';
import { View } from 'react-native';
import * as yup from 'yup';
import { useHistory } from 'react-router-native';

import useSignUp from '../hooks/useSignUp';
import useSignIn from '../hooks/useSignIn';
import SignUpForm from './SignUpForm';

interface SignUpFormValues {
  username: string;
  password: string;
  passwordConfirmation: string;
}

const initialValues: SignUpFormValues = {
  username: '',
  password: '',
  passwordConfirmation: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .max(30, 'Username can\'t be longer than 30 characters'),
  password: yup
    .string()
    .required('Password is required')
    .min(5, 'Password must have at least 5 characters')
    .max(50, 'Password can\'t be longer than 50 characters'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password doesn\'t match')
    .required('Password confirmation is required'),
});

export const SignUpContainer = ({ onSubmit }: {
  onSubmit: (values: SignUpFormValues) => Promise<void>
}): JSX.Element => {
  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

const SignUp = (): JSX.Element => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values: SignUpFormValues) => {
    const { username, password } = values;

    try {
      const signUpResult = await signUp({ username, password });
      console.log(signUpResult.data);
      const signInResult = await signIn({ username, password });
      console.log(signInResult.data);
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SignUpContainer onSubmit={onSubmit} />
  );
};

export default SignUp;