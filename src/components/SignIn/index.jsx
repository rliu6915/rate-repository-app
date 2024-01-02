


import { StyleSheet, View } from "react-native"
import { Formik } from "formik"
import SignInForm from "./SignInForm"

import * as yup from "yup"

import useSignIn from "../../hooks/useSignIn"

import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: `column`,
    padding: 10,
    width: `100%`,
    backgroundColor: `#ffffff`,
    alignItems: 'center',
  }
})

const SignIn = () => {
  const [signIn] = useSignIn()

  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { username, password } = values
    // console.log("values", username, password)
    
    try {
      const data = await signIn({ username, password })
      console.log("onSubmit", data)
      navigate("/")
    } catch (e) {
      console.log(e)
    }
  }

  const initialValues = {
    username: "",
    password: ""
  }
  
  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required("Username is required"),
    password: yup
      .string()
      .required("Password is required")
  })

  return (
    <View style={styles.container}>
      <Formik 
        initialValues={initialValues} 
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit}) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  )
}

export default SignIn