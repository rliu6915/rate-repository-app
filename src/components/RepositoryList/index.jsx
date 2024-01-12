
import RepositoryListContainer from './RepositoryListContainer'
import { useState } from 'react'
import { useDebounce } from 'use-debounce';
import useRepositories from '../../hooks/useRepositories'

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState("CREATED_AT")
  const [orderDirection, setOrderDirection] = useState("DESC")
  const [order, setOrder] = useState('Latest repositories')
  const [searchQuery, setSearchQuery] = useState('');

  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);

  // const {error, data } = useQuery(GET_REPOSITORIES, {
  //   fetchPolicy: 'cache-and-network',
  //   variables: {
  //     orderDirection: orderDirection,
  //     orderBy: orderBy,
  //     searchKeyword: debouncedSearchQuery
  //   }
  // })
  const {error, repositories, fetchMore } = useRepositories(
    orderBy, orderDirection, debouncedSearchQuery, 6
  )

  const onEndReached = () => {
    setTimeout(() => {
      console.log('You have reached the end of the list')
      fetchMore()
    }, 2000)
    // console.log('You have reached the end of the list')
    // fetchMore()
  }

  const pageHasNext = repositories ? repositories.pageInfo.hasNextPage : false

  // const repositories = data ? data.repositories : null
  // console.log('repositories.edges', repositories.edges)

  if (error) return `Error! ${error.message}`;

  return (
    <RepositoryListContainer 
      repositories={repositories} 
      order={order}
      setOrder={setOrder}
      setOrderBy={setOrderBy} 
      setOrderDirection={setOrderDirection}
      setSearchQuery={setSearchQuery}
      searchQuery={searchQuery}
      onEndReached={onEndReached}
      pageHasNext={pageHasNext}
    />
  )
}

export default RepositoryList;