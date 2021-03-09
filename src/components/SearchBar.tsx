import React from 'react';
import { StyleSheet } from 'react-native';
import { Searchbar as NativeSearchbar } from 'react-native-paper';

const styles = StyleSheet.create({
  search: {
    margin: 15,
  },
});

const SearchBar = ({ search, setSearch }: {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>
}): JSX.Element => {
  const handleSearch = (query: string) => setSearch(query);

  return (
    // There is a type issue with the Searchbar and the underlying TextInput
    // element and the use of textAlign parameter.
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <NativeSearchbar
      style={styles.search}
      placeholder='Search'
      onChangeText={handleSearch}
      value={search}
    />
  );
};

export default SearchBar;