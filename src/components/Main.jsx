
import { StyleSheet, View} from "react-native";

import RepositoryList from './RepositoryList/RepositoryList'
import AppBar from './AppBar/AppBar';

import { Routes, Route, Navigate } from "react-router-native"
import SignIn from "./SignIn";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `#e1e4e8`,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="*" element={<Navigate to="/" replace />}/>
      </Routes>
    </View>
  )
}

export default Main