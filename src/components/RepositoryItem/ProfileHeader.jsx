import { View, StyleSheet} from "react-native"

import AvataImage from "./AvataImage"
import ProfileInfo from "./ProfileInfo"

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 10,

  }
})

const ProfileHeader = ({source, fullName, description, language}) => {
  return (
    <View style={styles.container}>
      <AvataImage source={source} />
      <ProfileInfo 
        fullName={fullName}
        description={description}
        language={language}
      />
    </View>
  )
}

export default ProfileHeader