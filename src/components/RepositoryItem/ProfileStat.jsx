
import { View } from "react-native"
import Text from "../Text"

const ProfileStat = ({number, name}) => {
  const newNumber = number >= 1000 ? (number / 1000).toFixed(1) + 'k' : number
  return (
    <View>
      <Text color="textPrimary">{newNumber}</Text>
      <Text color="textSecondary">{name}</Text>
    </View>
  )
}

export default ProfileStat