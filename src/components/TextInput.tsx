import React from 'react';
import { TextInput as NativeTextInput, TextInputProps, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  baseInputStyle: {
    marginVertical: 5,
    borderColor: theme.colors.kindaGrey,
    borderWidth: 1,
    borderRadius: 5,
    fontSize: theme.fontSizes.subheading,
    padding: 10,
  },
  error: {
    borderColor: theme.colors.error,
  }
});

interface Props extends TextInputProps {
  error: string | false | undefined,
}

const TextInput = (props: Props) => {
  const textInputStyles = [styles.baseInputStyle, props.style, props.error ? styles.error : undefined];

  return <NativeTextInput style={textInputStyles} {...props} />;
};

export default TextInput;