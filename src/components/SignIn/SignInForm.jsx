import { View, Pressable } from "react-native"
import FormikTextInput from "./FormikTextInput"
import Text from "../Text"

const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" />
      <Pressable onPress={onSubmit}>
        <Text color="textPrimary">Sign in</Text>
      </Pressable>
    </View>
  )
}

export default SignInForm