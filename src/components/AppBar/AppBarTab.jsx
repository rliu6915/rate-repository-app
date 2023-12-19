import { Pressable, StyleSheet, StatusBar} from 'react-native';

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
    <Pressable styles={styles.container} onPress={onPressFunction}>
      <Link to={path}>
        <Text color="textSecondary">{text}</Text>
      </Link>
    </Pressable>
  )
}

export default AppBarTab;