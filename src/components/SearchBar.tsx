import React from 'react';
import { Searchbar as NativeSearchbar } from 'react-native-paper';

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
      placeholder='Search'
      onChangeText={handleSearch}
      value={search}
    />
  );
};

export default SearchBar;