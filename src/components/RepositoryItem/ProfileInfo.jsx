
import {View, StyleSheet} from "react-native"
import Text from "../Text"

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingRight: 15,
    flexWrap: "wrap"
  },
  language: {
    backgroundColor: "#0366d6",
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
    width: 80,
    alignItems: "center"
  }
})

const ProfileInfo = ({fullName, description, language}) => {
  return (
    <View styles={styles.container} testID="information">
        <Text color="textPrimary" fontWeight="bold">{fullName}</Text>
        <Text color="textSecondary">{description}</Text>
        <View style={styles.language}>
          <Text color="white" >{language}</Text>
        </View>
    </View>
  )
}

export default ProfileInfo