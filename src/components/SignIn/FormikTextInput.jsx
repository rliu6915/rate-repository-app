import TextInput from "./TextInput"
import { useField } from "formik"
import { Dimensions } from "react-native"

import Text from "react-native"

const Styles = {
  errorText: {
    marginTop: 5,
    color: "#d73a4a"
  },
  textInput: {
    borderColor: "#999999",
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
    width: Dimensions.get("window").width * 0.8
  }
}

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)
  const showError = meta.touched && meta.error
  console.log("FormikTextInput", field, meta, helpers)

  return (
    <>
      <TextInput
        style={Styles.textInput}
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props} 
      />
      {showError && <Text style={Styles.errorText}>{meta.error}</Text>}
    </>
  )
}

export default FormikTextInput