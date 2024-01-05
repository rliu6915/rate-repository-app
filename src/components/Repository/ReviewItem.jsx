import { View, StyleSheet } from 'react-native'
import RatingImage from './RatingImage'
import ReviewContent from './ReviewContent'

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    marginTop: 10,
    padding: 10,
    justifyContent: "sapce-around",
  }
})

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.container}>
      <RatingImage rating={review.rating} />
      <ReviewContent user={review.user} createdAt={review.createdAt} text={review.text} />
    </View>
  )
}

export default ReviewItem