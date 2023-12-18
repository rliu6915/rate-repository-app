
import {View, StyleSheet} from "react-native"
import Text from "../Text"

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingRight: 15
  }
})

const ProfileInfo = ({fullName, description, language}) => {
  return (
    <View styles={styles.container}>
        <Text color="textPrimary" fontWeight="bold">{fullName}</Text>
        <Text color="textSecondary">{description}</Text>
        <Text color="primary" >{language}</Text>
    </View>
  )
}

export default ProfileInfo