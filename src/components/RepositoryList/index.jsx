import { Text, View } from 'react-native';

import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES, GET_REPOSITORY } from '../../graphql/queries';

import RepositoryListContainer from './RepositoryListContainer'

const RepositoryList = () => {
  // const { repositories } = useRepositories()

  const {loading, error, data } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network'
  })
  const repositories = data ? data.repositories : null


  if (loading) {
    return <View><Text>Loading...</Text></View>
  }

  if (error) return `Error! ${error.message}`;

  // const {loading1, error1, data1 } = useQuery(GET_REPOSITORY, 
  //   {variables: { id:  }
  // })

  // if (loading1) {
  //   return <View><Text>Loading...</Text></View>
  // }

  // if (error1) return `Error! ${error.message}`;

  return (
    <RepositoryListContainer repositories={repositories} />
  )
}

export default RepositoryList;