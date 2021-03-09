import React from 'react';
import { StyleSheet, TouchableOpacity, View, Alert } from 'react-native';
import { format, parseISO } from 'date-fns';

import { Review } from '../types';
import Text from './Text';
import theme from '../theme';
import { useHistory } from 'react-router';
import useDeleteReview from '../hooks/useDeleteReview';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingTop: 15,
  },
  upperContainer: {
    flexDirection: 'row',
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
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    paddingVertical: 15,
    marginHorizontal: 10,
    marginBottom: 10,
    alignItems: 'center',
    flexGrow: 1,
    flexBasis: 0,
  },
  deleteColor: {
    backgroundColor: theme.colors.error,
  },
});

const ReviewItem = ({ review, showActions = false, handleRefetch }: {
  review: Review;
  showActions?: boolean;
  handleRefetch: () => Promise<void>;
}): JSX.Element => {
  const reviewDate = format(parseISO(review.createdAt), 'dd.MM.yyyy');
  const history = useHistory();
  const [deleteReview] = useDeleteReview();

  const handleViewRepository = () => {
    history.push(`/repository/${review.repository?.id}`);
  };

  const handleDeleteRepository = () => {
    Alert.alert(
      'Delete review',
      'Are you sure you want to delete this review?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'OK',
          onPress: async () => {
            await deleteReview({ id: review.id });
            await handleRefetch();
          }
        }
      ],
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <View>
          <View style={styles.ratingCircle}>
            <Text style={styles.ratingText} color='primary' fontSize='subheading' fontWeight='bold'>{review.rating}</Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View>
            <Text fontWeight='bold' fontSize='subheading'>{showActions ? review.repository?.fullName : review.user.username}</Text>
          </View>
          <View>
            <Text color='textSecondary'>{reviewDate}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text>{review.text}</Text>
          </View>
        </View>
      </View>
      {showActions &&
        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.5}
            onPress={handleViewRepository}
          >
            <Text color='offWhite' fontWeight='bold'>
              View repository
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.deleteColor]}
            activeOpacity={0.5}
            onPress={handleDeleteRepository}
          >
            <Text color='offWhite' fontWeight='bold'>
              Delete review
            </Text>
          </TouchableOpacity>
        </View>
      }
    </View>
  );
};

export default ReviewItem;