


import { StyleSheet, StatusBar, View} from "react-native"
import { Formik } from "formik"
import SignInForm from "./SignInForm"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
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

const onSubmit = (values) => {
  console.log(values)
}

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit}) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  )
}

export default SignIn