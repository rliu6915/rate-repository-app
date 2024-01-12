
import { StyleSheet, View } from "react-native";
import RepositoryList from './RepositoryList'
import AppBar from './AppBar';
import { Routes, Route, Navigate } from "react-router-native"
import SignIn from "./SignIn";
import Repository from "./Repository";
import ReviewForm from "./ReviewForm";
import SignUp from "./SignUp";
import MyReviews from "./MyReviews";

const styles = StyleSheet.create({
  container: {
    flexDirection: `column`,
    backgroundColor: `#e1e4e8`
  },
  content: {
    
  }
})

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.content}>
        <Routes>
          <Route path="/" element={<RepositoryList />}/>
          <Route path="/repository/:repoId" element={<Repository />} />
          <Route path="/reviewForm" element={<ReviewForm />} />
          <Route path="/myRevies" element={<MyReviews />} />
          <Route path="/signin" element={<SignIn />}/>
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Navigate to="/" replace />}/>
        </Routes>
      </View>
    </View>
  )
}

export default Main