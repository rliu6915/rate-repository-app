import { TextInput as NativeTextInput } from "react-native"

// const styles = StyleSheet.create({})

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style]

  if (error) {
    textInputStyle.push({ borderColor: "#ff0000" })
  }

  return (
    <NativeTextInput
      style={textInputStyle}
      {...props}
    />
  )
}

export default TextInput