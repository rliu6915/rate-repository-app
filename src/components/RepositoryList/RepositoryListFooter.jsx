import { View, StyleSheet } from 'react-native'
import Text from '../Text'

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "center",
  },
});

const RepositoruListFooter = () => {
  return (
    <View style={styles.container}>
      <Text fontWeight="bold">You have reached the end of the list</Text>
    </View>
  )
}

export default RepositoruListFooter