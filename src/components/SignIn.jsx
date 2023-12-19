
import Text from "./Text"
import { StyleSheet, StatusBar, View} from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  }
})

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text color="textPrimary">
        The Sign In View
      </Text>
    </View>
  )
}

export default SignIn