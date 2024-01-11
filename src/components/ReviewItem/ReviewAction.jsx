import { View, StyleSheet, Alert } from "react-native"
import Text from "../Text"
import { Button } from "react-native-paper"
import { useNavigate } from "react-router-native"
import { useMutation } from "@apollo/client"
import { DELETE_REVIEW } from "../../graphql/mutations"

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonOne: {
    backgroundColor: "#0366d6",
    borderRadius: 5,
  },
  buttonTwo: {
    backgroundColor: "#d73a4a",
    borderRadius: 5,
  },
})

const ReviewAction = ({ repoId, reviewId }) => {
  const navigate = useNavigate()
  const [deleteReview] = useMutation(DELETE_REVIEW, {
    variables: {
      "deleteReviewId": reviewId
    }
  })

  const handleViewRepository = () => {
    console.log("View repository")
    navigate(`/repository/${repoId}`)
  }

  const handleDeleteReview = () => {
    console.log("Delete review")
    Alert.alert('Delete review', 'Are you sure you want to delete this review ?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK', 
        onPress: onPressDeleteReview,
      },
    ]);
  }

  const onPressDeleteReview = () => {
    console.log("OnPress delete review")
    deleteReview()
  }

  return (
    <View style={styles.container}>
      <Button
        style={styles.buttonOne}
        onPress={handleViewRepository}
      >
        <Text color="white">View repository</Text>
      </Button>
      <Button
        style={styles.buttonTwo}
        onPress={handleDeleteReview}
      >
        <Text color="white">Delete review</Text>
      </Button>
    </View>
  )
}

export default ReviewAction