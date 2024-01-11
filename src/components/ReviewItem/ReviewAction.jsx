import { View, StyleSheet } from "react-native"
import Text from "../Text"
import { Button } from "react-native-paper"
import { useNavigate } from "react-router-native"

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

const ReviewAction = ({ repoId }) => {
  const navigate = useNavigate()

  const handleViewRepository = () => {
    console.log("View repository")
    navigate(`/repository/${repoId}`)
  }

  const handleDeleteReview = () => {
    console.log("Delete review")
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