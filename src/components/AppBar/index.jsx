import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: Constants.statusBarHeight,
    width: Dimensions.get('window').width,
    backgroundColor: '#24292e',
    // flexbox
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
});

const AppBar = () => {
  const onPressFunction = () => {
    console.log('Repositories pressed')

  }

  const onPressFunctionOne = () => {
    console.log('Sign in pressed')
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal >
        <AppBarTab text="Repositories" onPressFunction={onPressFunction} path="/" />
        <AppBarTab text="Sign in" onPressFunction={onPressFunctionOne} path="/signin" />
      </ScrollView>
    </View>
  )
};

export default AppBar;