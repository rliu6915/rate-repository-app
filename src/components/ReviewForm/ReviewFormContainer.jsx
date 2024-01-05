import { Formik } from "formik"
import { View, StyleSheet } from "react-native"
import ReviewFormSpec from "./ReviewFormSpec"
import * as yup from "yup"

const styles = StyleSheet.create({
  container: {
    flexDirection: `column`,
    padding: 10,
    width: `100%`,
    backgroundColor: `#ffffff`,
    alignItems: 'center',
  }
})

const ReviewFormContainer = ({ onSubmit }) => {
  const initialValues = {
    repoOwnerName: "",
    repoName: "",
    reviewRating: "",
    reviewText: ""
  }

  const validationSchema = yup.object().shape({
    repoOwnerName: yup
      .string()
      .required("Repository owner's username is required"),
    repoName: yup
      .string()
      .required("Repository's name is required"),
    reviewRating: yup
      .number("Rating is a number")
      .min(0, "Rating must be greater than or equal to 0")
      .max(100, "Rating must be less than or equal to 100")
      .required("Rating is required"),
    reviewText: yup
      .string()
  })

  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <ReviewFormSpec onSubmit={handleSubmit} />}
      </Formik>
    </View>
  )
}

export default ReviewFormContainer