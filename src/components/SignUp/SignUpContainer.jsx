import { Formik } from "formik"
import {View, StyleSheet} from "react-native"
import SignUpForm from "./SignUpForm"
import * as yup from "yup"

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: 10
  }
})

const SignUpContainer = ({ onSubmit }) => {
  const initialValues = {
    username: "",
    password: "",
    confirmation: ""
  }

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required("Username is required"),
    password: yup
      .string()
      .required("Password is required"),
    confirmation: yup
      .string()
      .required("confirmation is required")
  })

  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  )
}

export default SignUpContainer