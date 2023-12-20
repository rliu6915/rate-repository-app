import { View, Pressable, StyleSheet, Dimensions } from "react-native"
import FormikTextInput from "./FormikTextInput"
import Text from "../Text"

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: "#0366d6",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 5,
    width: Dimensions.get("window").width * 0.8
  }
})

const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <Pressable onPress={onSubmit} style={styles.pressable}>
        <Text color="textPrimary">Sign in</Text>
      </Pressable>
    </View>
  )
}

export default SignInForm