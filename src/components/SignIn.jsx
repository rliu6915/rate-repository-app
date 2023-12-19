
import Text from "./Text"
import { StyleSheet, StatusBar, View} from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  }
})

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <View style={styles.container}>
      <Text>Sign in</Text>
      
    </View>
  )
}

export default SignIn