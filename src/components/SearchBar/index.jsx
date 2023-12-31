import { View, StyleSheet } from 'react-native'
import { Searchbar } from 'react-native-paper';
import React from 'react';

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
  // const [value] = useDebounce(searchQuery, 500);
  // console.log("value", value)

  return (
    <View>
      <Searchbar 
        placeholder='Search'
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.container}
        inputStyle={styles.input}
      />
    </View>
  )
}

export default SearchBar