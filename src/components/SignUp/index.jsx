import { useMutation } from "@apollo/client"
import SignUpContainer from "./SignUpContainer"
import { CREATE_USER } from "../../graphql/mutations"
import useSignIn from "../../hooks/useSignIn"
import { useNavigate } from "react-router-native"

const SignUp = () => {
  const [createUser] = useMutation(CREATE_USER)
  const [signIn] = useSignIn()
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    console.log("onSubmit SignUp")
    const { username, password } = values
    try {
      await createUser({
        variables: {
          user: {
            username,
            password
          }
        }
      })
      // console.log("User created", data)

      await signIn({ username, password})
      // console.log("Signed in")
      navigate("/")
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <SignUpContainer onSubmit={onSubmit}/>
  )
}

export default SignUp