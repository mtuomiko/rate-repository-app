import React, { useState } from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-community/picker';

import RepositoryItem from '../RepositoryItem';
import { Repository } from '../../types';
import useRepositories, { OrderParams } from '../../hooks/useRepositories';
import { useHistory } from 'react-router-native';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});


const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, header }: {
  repositories: {
    edges: Array<{
      node: Repository
    }>
  } | undefined;
  header?: JSX.Element;
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
      ListHeaderComponent={header}
    />
  );
};

type OrderState = 'latest' | 'highestRated' | 'lowestRated';

const RepositoryList = (): JSX.Element => {
  const [order, setOrder] = useState<OrderState>('latest');

  const orderParam: OrderParams = {
    orderBy: order === 'latest' ? 'CREATED_AT' : 'RATING_AVERAGE',
    orderDirection: order === 'lowestRated' ? 'ASC' : 'DESC',
  };

  const { repositories } = useRepositories(orderParam);

  const OrderPicker = (): JSX.Element => {
    const options: Array<{ label: string, value: OrderState }> = [
      {
        label: 'Latest repositories',
        value: 'latest',
      },
      {
        label: 'Highest rated repositories',
        value: 'highestRated',
      },
      {
        label: 'Lowest rated repositories',
        value: 'lowestRated',
      },
    ];

    return (
      <Picker
        selectedValue={order}
        onValueChange={(itemValue) => {
          // Expo SDK 38 compatible Picker probably has lacking TS support?
          // Ended up with this hack
          setOrder(itemValue as OrderState);
        }}
      >
        {options.map((o, i) => {
          return (
            <Picker.Item key={i} label={o.label} value={o.value} />
          );
        })}
      </Picker>
    );
  };

  return <RepositoryListContainer repositories={repositories} header={<OrderPicker />} />;
};

export default RepositoryList;