import { Pressable, View, StyleSheet, Dimensions} from "react-native"
import FormikTextInput from "../FormikTextInput"
import Text from "../Text"

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: "#0366d6",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
    width: Dimensions.get("window").width * 0.8
  }
})

const SignUpForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry/>
      <FormikTextInput name="confirmation" placeholder="Password confirmation" />
      <Pressable onPress={onSubmit} style={styles.pressable}>
        <Text color="">
          Sign up
        </Text>
      </Pressable>
    </View>
  )
}

export default SignUpForm