
import { FlatList, SafeAreaView, View, StyleSheet, StatusBar } from 'react-native'
import ReviewItem from '../ReviewItem'
import useAuthUser from '../../hooks/useAuthUser'

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

const MyReviews = () => {
  const { data } = useAuthUser(true)
  // console.log('data', data)

  const reviewNodes = data
  ? data.me.reviews.edges.map(edge => edge.node)
  : []


  return (
    <SafeAreaView >
      <FlatList
        data={reviewNodes}
        renderItem={({item}) => <ReviewItem review={item} />}
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={ItemSeparator}
      />
    </SafeAreaView>
  )
}

export default MyReviews