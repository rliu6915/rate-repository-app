import { Pressable, StyleSheet, StatusBar, View} from 'react-native';

import Text from '../Text';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
})

const AppBarTab = ({text, onPressFunction, path}) => {
  return (
    // <View style={{marginLeft: 10}}>
    //   <Pressable styles={styles.container} onPress={onPressFunction}>
    //     {() => (
    //       <Link to={path}>
    //         <Text color="textSecondary">{text}</Text>
    //       </Link>
    //     )}
    //   </Pressable>
    // </View>

    <View style={{marginLeft: 10}}>
      <Link styles={styles.container} onPress={onPressFunction} to={path}>
        <Text color="textSecondary">{text}</Text>
      </Link>
    </View>
  )
}

export default AppBarTab;