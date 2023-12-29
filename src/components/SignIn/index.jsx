


import { StyleSheet, View } from "react-native"
import { Formik } from "formik"
import SignInForm from "./SignInForm"

import * as yup from "yup"

import useSignIn from "../../hooks/useSignIn"

const styles = StyleSheet.create({
  container: {
    flexDirection: `column`,
    padding: 10,
    width: `100%`,
    backgroundColor: `#ffffff`,
    alignItems: 'center',
  }
})

const initialValues = {
  username: "",
  password: ""
}

const onSubmit = async (values) => {
  const { username, password } = values
  const [ signIn ] = useSignIn()
  
  try {
    const { data } = await signIn({ username, password })
    console.log("onSubmit", data)
  } catch (e) {
    console.log(e)
  }
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required"),
  password: yup
    .string()
    .required("Password is required")
})

const SignIn = () => {
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