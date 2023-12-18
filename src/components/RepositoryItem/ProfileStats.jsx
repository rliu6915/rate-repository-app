import { View, StyleSheet} from "react-native"

import ProfileStat from "./ProfileStat"

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
})

const ProfileStats = ({ forksCount,  stargazersCount, ratingAverage, reviewCount}) => {
  return (
    <View style={styles.container}>
      <ProfileStat number={forksCount} name="Forks" />
      <ProfileStat number={stargazersCount} name="Stars" />
      <ProfileStat number={ratingAverage} name="Ratings" />
      <ProfileStat number={reviewCount} name="Reviews" />
    </View>
  )
}

export default ProfileStats