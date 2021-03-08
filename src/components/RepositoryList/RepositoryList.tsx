import React from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';

import RepositoryItem from '../RepositoryItem';
import { Repository } from '../../types';
import useRepositories from '../../hooks/useRepositories';
import { useHistory } from 'react-router-native';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});


const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }: {
  repositories: {
    edges: Array<{
      node: Repository
    }>
  } | undefined
}): JSX.Element => {
  const repositoryNodes = repositories && repositories.edges
    ? repositories.edges.map(edge => edge.node)
    : [];

  const history = useHistory();

  const renderItem = ({ item }: { item: Repository }) => {
    const openRepository = () => {
      history.push(`/repository/${item.id}`);
    };

    return (
      <TouchableOpacity activeOpacity={0.5} onPress={openRepository}>
        <RepositoryItem item={item} />
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const RepositoryList = (): JSX.Element => {
  const { repositories } = useRepositories();

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;