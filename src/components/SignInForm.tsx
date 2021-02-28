import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
  },
  signInButton: {
    color: theme.colors.offWhite,
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    padding: 10,
    textAlign: 'center',
    marginTop: 5,
  }
});
export interface SignInFormValues {
  username: string;
  password: string;
}

interface Props {
  //onSubmit: (values: SignInFormValues) => void;
  onSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void
}

const SignInForm = (props: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <TouchableOpacity activeOpacity={0.5} onPress={props.onSubmit}>
        <Text style={styles.signInButton} fontWeight='bold' fontSize='subheading'>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInForm;