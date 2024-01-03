import { Text, View } from 'react-native';

import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../../graphql/queries';

import RepositoryListContainer from './RepositoryListContainer'

const RepositoryList = () => {
  // const { repositories } = useRepositories()

  const {loading, error, data } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network'
  })

  if (loading) {
    return <View><Text>Loading...</Text></View>
  }

  if (error) return `Error! ${error.message}`;

  // console.log('data', data)

  return (
    <RepositoryListContainer data={data} />
  )
}

export default RepositoryList;