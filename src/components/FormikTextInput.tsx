import React from 'react';
import { StyleSheet, TextInputProps } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  errorText: {
    marginBottom: 10,
    color: theme.colors.error,
  },
});

interface FormikTextInputProps extends TextInputProps {
  name: string;
}

const FormikTextInput = (props: FormikTextInputProps): JSX.Element => {
  const [field, meta, helpers] = useField(props.name);
  const showError = meta.touched ? meta.error : undefined;

  return (
    <>
      <TextInput
        onChangeText={(value: string) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;