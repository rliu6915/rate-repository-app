import { Pressable, StyleSheet, StatusBar} from 'react-native';

import Text from './Text';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
})

const AppBarTab = ({text, onPressFunction}) => {
  return (
    <Pressable styles={styles.container} onPress={onPressFunction}>
      <Text color="textSecondary">{text}</Text>
    </Pressable>
  );
}

export default AppBarTab;