import React from 'react';
import { Searchbar } from 'react-native-paper';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChangeText }) => {
  return <Searchbar placeholder="Search tasks" value={value} onChangeText={onChangeText} />;
};

export default SearchBar;
