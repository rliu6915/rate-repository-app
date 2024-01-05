import { StyleSheet, View } from 'react-native'
import Text from '../Text'

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    borderRadius: 25,
    color: "#0366d6",
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