import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import useAuthorizedUser from '../hooks/useAuthorizedUser';
import ReviewItem from './ReviewItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    backgroundColor: 'white',
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const UserReviews = () => {
  const { authorizedUser } = useAuthorizedUser({ includeReviews: true });

  const reviews = authorizedUser?.reviews?.edges.map(e => e.node);

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default UserReviews;