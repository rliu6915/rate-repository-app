import TextInput from "./TextInput"
import { useField } from "formik"

import Text from "react-native"

const Styles = {
  errorText: {
    marginTop: 5,
    color: "#d73a4a"
  }
}

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)
  const showError = meta.touched && meta.error
  console.log("FormikTextInput", field, meta, helpers)

  return (
    <>
      <TextInput
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