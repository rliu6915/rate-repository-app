import { StyleSheet, StatusBar, View, Pressable} from 'react-native';

import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
})

const AppBarTab = ({text, onPressFunction}) => {
  return (
    <View style={{marginLeft: 10}}>
      <Pressable styles={styles.container} onPress={onPressFunction}>
        <Text color="textSecondary">{text}</Text>
      </Pressable>
    </View>

    // <View style={{marginLeft: 10}}>
    //   <Link styles={styles.container} onPress={onPressFunction} to={path}>
    //     <Text color="textSecondary">{text}</Text>
    //   </Link>
    // </View>
  )
}

export default AppBarTab;