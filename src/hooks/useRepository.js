import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (repoId, first) => {
  const {loading, error, data, fetchMore } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: {
      id: repoId,
      first: first
    }
  })
  // console.log("data.repositories.edges",data.repositories.edges)

  const handleFetchMore = () => {
    const canFetchMore = !loading && data.repository.reviews.pageInfo.hasNextPage
    if (!canFetchMore) {
      return
    }
    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        first: first,
        id: repoId
      },
    })
  }

  return { 
    repository: data ? data.repository : null,
    loading, 
    error,
    fetchMore: handleFetchMore,
  }
}

export default useRepository