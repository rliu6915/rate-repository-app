import { View, StyleSheet } from 'react-native'
import { Searchbar } from 'react-native-paper';
// import { useState } from 'react';
import { useDebounce } from 'use-debounce';

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    width: "90%",
    height: 45,
    alignSelf: "center",
    backgroundColor: "white",
  },
  input: {
    fontSize: 14,
    fontFamily: "Arial",
    color: "black",
  }
})

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  // const [searchQuery, setSearchQuery] = useState('');
  const [value] = useDebounce(searchQuery, 1000);

  return (
    <View>
      <Searchbar 
        placeholder='Search'
        onChangeText={setSearchQuery}
        value={value}
        style={styles.container}
        inputStyle={styles.input}
      />
    </View>
  )
}

export default SearchBar