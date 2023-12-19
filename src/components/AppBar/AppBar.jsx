import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import AppBarTab from './AppBarTab';
import {Dimensions} from 'react-native';

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
      <AppBarTab text="Repositories" onPressFunction={onPressFunction} path="/" />
      <AppBarTab text="Sign in" onPressFunction={onPressFunctionOne} path="/signin" />
    </View>
  )
};

export default AppBar;