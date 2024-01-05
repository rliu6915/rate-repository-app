import { StyleSheet, View } from 'react-native'
import Text from '../Text'
import { format } from 'date-fns'

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  }
})

const ReviewContent = ({ user, createdAt, text}) => {
  const date = format(createdAt, "MM/dd/yyyy");
  return (
    <View style={styles.container}>
      <Text fontWeight="bold">{user.username}</Text>
      <Text color="textSecondary">{date}</Text>
      <Text>{text}</Text>
    </View>
  )
}

export default ReviewContent