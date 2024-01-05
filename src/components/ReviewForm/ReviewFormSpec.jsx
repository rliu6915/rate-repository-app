import { View, Pressable, StyleSheet, Dimensions } from "react-native"
import FormikTextInput from "../FormikTextInput"
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

const ReviewFormSpec = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="repoOwnerName" placeholder="Repository owner name" />
      <FormikTextInput name="repoName" placeholder="Repository name" />
      <FormikTextInput name="reviewRating" placeholder="Rating between 0 and 100" />
      <FormikTextInput name="reviewText" placeholder="Review" />
      <Pressable onPress={onSubmit} style={styles.pressable}>
        <Text color="textPrimary">Sign in</Text>
      </Pressable>
    </View>
  )
}

export default ReviewFormSpec