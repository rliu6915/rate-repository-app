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
      .required("Username is required")
      .min(5, "Username must be at least 5 characters long")
      .max(30, "Username must be at most 30 characters long"),
    password: yup
      .string()
      .required("Password is required")
      .min(5, "Username must be at least 5 characters long")
      .max(50, "Username must be at most 50 characters long"),
    confirmation: yup
      .string()
      .required("Password confirmation is required")
      .oneOf([yup.ref("password"), null], "Password confirmation matches the password")
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