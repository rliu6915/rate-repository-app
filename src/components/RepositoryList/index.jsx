import { Text, View } from 'react-native';
import RepositoryListContainer from './RepositoryListContainer'
import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../../graphql/queries'

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState("CREATED_AT")
  const [orderDirection, setOrderDirection] = useState("DESC")
  const [order, setOrder] = useState('Latest repositories')
  const [searchQuery, setSearchQuery] = useState('');

  const {loading, error, data } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: {
      orderDirection: orderDirection,
      orderBy: orderBy,
      searchKeyword: searchQuery
    }
  })

  const repositories = data ? data.repositories : null
  // console.log('repositories.edges', repositories.edges)

  if (loading) {
    return <View><Text>Loading...</Text></View>
  }
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
    />
  )
}

export default RepositoryList;