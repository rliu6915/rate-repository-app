
import { View, StyleSheet, Pressable } from 'react-native'

import Text from '../Text'

import * as Linking from 'expo-linking';


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0366d6',
    padding: 10,
    margin: 25,
    borderRadius: 5,
    alignItems: 'center'
  }
})

const Button = ({ url }) => {
  const onPress = () => {
    Linking.openURL(url)
  }
  
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <Text color="white">Open in Github</Text>
      </Pressable>
    </View>
  )
}

export default Button