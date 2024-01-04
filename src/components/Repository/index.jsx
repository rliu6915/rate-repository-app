import { useParams } from 'react-router-native'

import { useQuery } from '@apollo/client'
import { GET_REPOSITORY } from '../../graphql/queries'
import { Text, View } from 'react-native'

import RepositoryItem from '../RepositoryItem'

const Repository = () => {
  let { userId } = useParams()

  const { loading, error, data } = useQuery(GET_REPOSITORY, {
    variables: { id: userId },
    fetchPolicy: 'cache-and-network',
  })

  const item = data ? data.repository : null

  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error : {error}</Text>

  return (
    <View >
      <RepositoryItem props={item} />
    </View>
  )
}

export default Repository