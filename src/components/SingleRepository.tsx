import React from 'react';
import { useParams } from 'react-router-native';

import RepositoryItem from './RepositoryItem';
import useSingleRepository from '../hooks/useSingleRepository';
import { Repository } from '../types';
import { FlatList, StyleSheet, View } from 'react-native';
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

const RepositoryInfo = ({ repository }: {
  repository: Repository | undefined
}) => {
  if (repository) {
    return (
      <View>
        <RepositoryItem item={repository} showLink={true} />
        <ItemSeparator />
      </View>
    );
  }
  return null;
};

const SingleRepository = () => {
  const { id } = useParams<{ id: string }>();
  const variables = {
    id,
    first: 10,
  };
  const { repository, fetchMore } = useSingleRepository(variables);
  const reviews = repository?.reviews?.edges.map(e => e.node);

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default SingleRepository;