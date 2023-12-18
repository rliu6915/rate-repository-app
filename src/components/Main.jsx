import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from "react-native";

import RepositoryList from './RepositoryList'
import AppBar from './AppBar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <RepositoryList />
      <StatusBar style="auto" />
    </View>
  )
}

export default Main