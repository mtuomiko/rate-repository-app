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
  const { authorizedUser, refetch } = useAuthorizedUser({ includeReviews: true });

  const reviews = authorizedUser?.reviews?.edges.map(e => e.node);

  const handleRefetch = async () => {
    await refetch();
  };

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} showActions handleRefetch={handleRefetch} />}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default UserReviews;