import { useParams } from 'react-router-native'
import { FlatList, Text, SafeAreaView, View, StyleSheet, StatusBar } from 'react-native'
import RepositoryItem from '../RepositoryItem'
import ReviewItem from '../ReviewItem'
import useRepository from '../../hooks/useRepository'

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

  const { loading, error, data } = useRepository(repoId)

  const repository = data ? data.repository : null

  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error : {error}</Text>

  const reviewNodes = data
  ? data.repository.reviews.edges.map(edge => edge.node)
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