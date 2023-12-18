
import { View, Image, StyleSheet} from "react-native"

const styles = StyleSheet.create({
  container: {
    paddingRight: 15,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 5
  }
})

const AvataImage = ({source}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: source,
        }}
      />
    </View>
  )
}

export default AvataImage