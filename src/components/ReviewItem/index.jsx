import { View, StyleSheet } from 'react-native'
import RatingImage from './RatingImage'
import ReviewContent from './ReviewContent'
import ReviewAction from './ReviewAction'

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
  },
  content: {
    flexDirection: "row",
    marginTop: 10,
    padding: 10,
  },
  action: {
    // marginTop: 10,
    // marginBottom: 10,
    padding: 10,
    // alignItems: "center",
  }
})

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <RatingImage rating={review.rating} />
        <ReviewContent user={review.user} createdAt={review.createdAt} text={review.text} />
      </View>
      <View style={styles.action}>
        <ReviewAction />
      </View>
    </View>
  )
}

export default ReviewItem