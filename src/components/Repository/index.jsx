import { useParams } from 'react-router-native'

import { useQuery } from '@apollo/client'
import { GET_REPOSITORY } from '../../graphql/queries'
import { FlatList, Text, SafeAreaView, View, StyleSheet, StatusBar } from 'react-native'
import RepositoryItem from '../RepositoryItem'
import ReviewItem from '../ReviewItem'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    flexDirection: "row",
    marginTop: StatusBar.currentHeight || 0
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const Repository = () => {
  let { repoId } = useParams()

  const { error, data } = useQuery(GET_REPOSITORY, {
    variables: { id: repoId },
    fetchPolicy: 'cache-and-network',
  })

  const repository = data ? data.repository : null
  // if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error : {error}</Text>

  const reviewNodes = repository.reviews
  ? repository.reviews.edges.map(edge => edge.node)
  : []

  return (
    <SafeAreaView >
      {/* <RepositoryItem props={item} /> */}
      <FlatList
        data={reviewNodes}
        renderItem={({item}) => <ReviewItem review={item} />}
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={ItemSeparator}
        ListHeaderComponent={() => <RepositoryItem props={repository} />}
      />
    </SafeAreaView>
  )
}

export default Repository