import SignUpContainer from "./SignUpContainer"

const SignUp = () => {
  const onSubmit = () => {
    console.log("onSubmit SignUp")
  }
  return (
    <SignUpContainer onSubmit={onSubmit}/>
  )
}

export default SignUp