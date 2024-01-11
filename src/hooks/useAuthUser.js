import { useQuery } from '@apollo/client'
import { GET_CURRENT_USER } from '../graphql/queries'

const useAuthUser = (ifIncluded) => {
  const { loading, error, data } = useQuery(GET_CURRENT_USER, {
    fetchPolicy: 'cache-and-network',
    variables: {
      "includeReviews": ifIncluded
    },
    pollInterval: 500,
  })

  return {loading, error, data }
}

export default useAuthUser