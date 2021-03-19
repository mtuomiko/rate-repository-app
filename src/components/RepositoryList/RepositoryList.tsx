import React, { useState } from 'react';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { useDebounce } from 'use-debounce';
import { RouteComponentProps } from 'react-router-native';

import RepositoryItem from '../RepositoryItem';
import { Repository } from '../../types';
import useRepositories, { RepositoriesQueryVariables } from '../../hooks/useRepositories';
import OrderPicker, { OrderState } from '../OrderPicker';
import SearchBar from '../SearchBar';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

interface RepositoryListContainerProps extends RouteComponentProps {
  repositories: {
    edges: Array<{
      node: Repository
    }>
  } | undefined;
  order: OrderState;
  setOrder: React.Dispatch<React.SetStateAction<OrderState>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  onEndReach: () => void;
}

export class RepositoryListContainer extends React.Component<RepositoryListContainerProps> {
  renderHeader = () => {
    const { order, setOrder, search, setSearch } = this.props;
    return (
      <>
        <SearchBar search={search} setSearch={setSearch} />
        <OrderPicker order={order} setOrder={setOrder} />
      </>
    );
  };

  renderItem = ({ item }: { item: Repository }) => {
    const { history } = this.props;
    const openRepository = () => {
      history.push(`/repository/${item.id}`);
    };

    return (
      <Pressable onPress={openRepository}>
        <RepositoryItem item={item} />
      </Pressable>
    );
  };

  render() {
    const { repositories, onEndReach } = this.props;
    const repositoryNodes = repositories && repositories.edges
      ? repositories.edges.map(edge => edge.node)
      : [];

    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={this.renderHeader}
        onEndReached={onEndReach}
      />
    );
  }
}

const RepositoryList = (props: RouteComponentProps) => {
  const [order, setOrder] = useState<OrderState>('latest');
  const [search, setSearch] = useState('');
  const [searchDebounce] = useDebounce(search, 500);

  const variables: RepositoriesQueryVariables = {
    orderBy: order === 'latest' ? 'CREATED_AT' : 'RATING_AVERAGE',
    orderDirection: order === 'lowestRated' ? 'ASC' : 'DESC',
    searchKeyword: searchDebounce,
    first: 8,
  };

  const { repositories, fetchMore } = useRepositories(variables);

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      order={order}
      setOrder={setOrder}
      search={search}
      setSearch={setSearch}
      onEndReach={onEndReach}
      {...props}
    />
  );
};

export default RepositoryList;