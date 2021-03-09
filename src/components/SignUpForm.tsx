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

interface Props {
  onSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void
}

const SignUpForm = (props: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        testID='signUpUsername'
        name="username"
        placeholder="Username" />
      <FormikTextInput
        testID='signUpPassword'
        name="password"
        placeholder="Password"
        secureTextEntry />
      <FormikTextInput
        testID='signUpPasswordConfirmation'
        name="passwordConfirmation"
        placeholder="Password confirmation"
        secureTextEntry />
      <TouchableOpacity testID='signUpButton' activeOpacity={0.5} onPress={props.onSubmit}>
        <Text style={styles.signInButton} fontWeight='bold' fontSize='subheading'>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpForm;