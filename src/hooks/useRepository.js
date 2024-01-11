import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (repoId) => {
  const {loading, error, data } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: {
      id: repoId
    }
  })
  // console.log("data.repositories.edges",data.repositories.edges)

  return { data, loading, error }
}

export default useRepository