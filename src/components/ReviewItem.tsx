import React from 'react';
import { StyleSheet, View } from 'react-native';
import { format, parseISO } from 'date-fns';

import { Review } from '../types';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingTop: 15,
  },
  ratingCircle: {
    width: 50,
    height: 50,
    borderWidth: 3,
    borderColor: theme.colors.primary,
    borderRadius: 25,
    marginLeft: 15,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingText: {
    marginBottom: 3,
  },
  infoContainer: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'flex-start',
    paddingRight: 10,
    paddingBottom: 10,
  },
  textContainer: {
    marginTop: 5,
  },
});

const ReviewItem = ({ review }: { review: Review }): JSX.Element => {
  const reviewDate = format(parseISO(review.createdAt), 'dd.MM.yyyy');

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.ratingCircle}>
          <Text style={styles.ratingText} color='primary' fontSize='subheading' fontWeight='bold'>{review.rating}</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View>
          <Text fontWeight='bold' fontSize='subheading'>{review.user.username}</Text>
        </View>
        <View>
          <Text color='textSecondary'>{reviewDate}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text>{review.text}</Text>
        </View>
      </View>
    </View>
  );
};

export default ReviewItem;