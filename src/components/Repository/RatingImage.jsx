import { StyleSheet, View } from 'react-native'
import Text from '../Text'

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    height: 50,
    width: 50,
    borderRadius: 25,
    // backgroundColor: "#0366d6",
    borderColor: "#0366d6",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  }
})

const RatingImage = ({ rating }) => {
  return (
    <View style={styles.container}>
      <Text color="primary">{rating}</Text>
    </View>
  )
}

export default RatingImage