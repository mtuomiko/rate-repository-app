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
  button: {
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

const CreateReviewForm = (props: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        testID='createReviewOwnerName'
        name="ownerName"
        placeholder="Repository owner name"
      />
      <FormikTextInput
        testID='createReviewRepositoryName'
        name="repositoryName"
        placeholder="Repository name"
      />
      <FormikTextInput
        testID='createReviewRating'
        name="rating"
        placeholder='Rating between 0-100'
        keyboardType='numeric'
      />
      <FormikTextInput
        testID='createReviewText'
        name="text"
        placeholder='Review'
        multiline
      />
      <TouchableOpacity testID='createReviewButton' activeOpacity={0.5} onPress={props.onSubmit}>
        <Text style={styles.button} fontWeight='bold' fontSize='subheading'>Create a review</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateReviewForm;