import React from 'react';
import { StyleSheet, Pressable, View } from 'react-native';

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
  onSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void
}

const SignInForm = (props: Props) => {
  return (
    <View style={styles.container}>
      <FormikTextInput testID='signInUsername' name="username" placeholder="Username" />
      <FormikTextInput testID='signInPassword' name="password" placeholder="Password" secureTextEntry />
      <Pressable testID='signInButton' onPress={props.onSubmit}>
        <Text style={styles.signInButton} fontWeight='bold' fontSize='subheading'>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default SignInForm;