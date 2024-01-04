
import { View, StyleSheet } from 'react-native'

import Text from '../Text'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0366d6',
    padding: 10,
    margin: 25,
    borderRadius: 5
  }
})

const Button = () => {
  return (
    <View style={styles.container}>
      <Text color="white">Open in Github</Text>
    </View>
  )
}

export default Button