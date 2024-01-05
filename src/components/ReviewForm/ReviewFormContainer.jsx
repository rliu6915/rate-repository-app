import { Formik } from "formik"
import { View, StyleSheet } from "react-native"
import ReviewFormSpec from "./ReviewFormSpec"

const styles = StyleSheet.create({
  container: {
    flexDirection: `column`,
    padding: 10,
    width: `100%`,
    backgroundColor: `#ffffff`,
    alignItems: 'center',
  }
})

const ReviewFormContainer = ({ onsubmit }) => {
  const initialValues = {
    repoOwnerName: "",
    repoName: "",
    reviewRating: "",
    reviewText: ""
  }

  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={onsubmit}
      >
        {({ handleSubmit }) => <ReviewFormSpec onsubmit={handleSubmit} />}
      </Formik>
    </View>
  )
}

export default ReviewFormContainer