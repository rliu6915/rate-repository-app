import { useMutation } from "@apollo/client"
import { SIGN_IN } from "../graphql/mutations"

import useAuthStorage from '../hooks/useAuthStorage'

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN)
  // console.log('result', result)

  const authStorage = useAuthStorage()

  const signIn = async ({ username, password}) => {
    return await mutate({ 
        variables: { credentials: { username, password } } 
    })
  }

  return [signIn, result]
}

export default useSignIn