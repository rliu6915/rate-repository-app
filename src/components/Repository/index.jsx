import { useParams } from 'react-router-native'
import { FlatList, Text, SafeAreaView, View, StyleSheet, StatusBar } from 'react-native'
import RepositoryItem from '../RepositoryItem'
import ReviewItem from '../ReviewItem'
import useRepository from '../../hooks/useRepository'
import ListFooter from '../ListFooter'

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

  const { loading, error, repository, fetchMore } = useRepository(repoId, 2)

  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error : {error}</Text>

  const reviewNodes = repository
  ? repository.reviews.edges.map(edge => edge.node)
  : []

  const pageHasNext =  repository ? repository.reviews.pageInfo.hasNextPage : false

  const onEndReached = () => {
    setTimeout(() => {
      console.log('You have reached the end of the list')
      fetchMore()
    }, 2000)
  }

  return (
    <SafeAreaView >
      {/* <RepositoryItem props={item} /> */}
      <FlatList
        data={reviewNodes}
        renderItem={({item}) => <ReviewItem review={item} />}
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={ItemSeparator}
        ListHeaderComponent={() => <RepositoryItem props={repository} />}
        ListFooterComponent={() => <ListFooter pageHasNext={pageHasNext}/>}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
      />
    </SafeAreaView>
  )
}

export default Repository