import { View, StyleSheet, 
  Dimensions, ScrollView, Text } 
from 'react-native'

import AppBarTab from './AppBarTab'
// import { useQuery } from '@apollo/client';
// import { GET_CURRENT_USER } from '../../graphql/queries'
import useAuthUser from '../../hooks/useAuthUser'

import { useApolloClient } from '@apollo/client'
import useAuthStorage from '../../hooks/useAuthStorage'
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom : 15,
    width: Dimensions.get('window').width,
    backgroundColor: '#24292e',
    // flexbox
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  subContainer: {
    flexDirection: 'row'
  }
});

const AppBar = () => {
  const apolloClient = useApolloClient()
  const authStorage = useAuthStorage()
  const navigate = useNavigate()

  const onPressFunction = () => {
    console.log('Repositories pressed')
    navigate('/')
  }

  const onPressFunctionOne = () => {
    console.log('Sign in pressed')
    navigate('/signin')
  }

  const onPressFunctionTwo = async () => {
    console.log('Sign out pressed')
    await authStorage.removeAccessToken()
    apolloClient.resetStore()
    navigate('/')
  }

  const onPressFunctionThree = () => {
    console.log('Create a review pressed')
    navigate('/reviewForm')
  }

  const onPressFunctionFour = () => {
    console.log("Sign up pressed")
    navigate("/signup")
  }

  const onPressFunctionFive = () => {
    console.log("My reviews pressed")
    navigate("/myRevies")
  }

  // const { loading, error, data } = useQuery(GET_CURRENT_USER, {
  //   fetchPolicy: 'cache-and-network'
  // })
  const {loading, error, data } = useAuthUser(false)

  console.log("GET_CURRENT_USER", data)

  if (loading) {
    return <View><Text>Loading...</Text></View>
  }

  if (error) return `Error! ${error.message}`;

  return (
    <View style={styles.container}>
      <ScrollView horizontal >
        <AppBarTab text="Repositories" onPressFunction={onPressFunction} />
        {data.me ? (
          <View style={styles.subContainer}>
            <AppBarTab text="Create a review" onPressFunction={onPressFunctionThree} />
            <AppBarTab text="My reviews" onPressFunction={onPressFunctionFive} />
            <AppBarTab text="Sign out" onPressFunction={onPressFunctionTwo} />
          </View>
        ) : (
          <View style={styles.subContainer}>
            <AppBarTab text="Sign in" onPressFunction={onPressFunctionOne} />
            <AppBarTab text="Sign up" onPressFunction={onPressFunctionFour} />
          </View>
        )}
      </ScrollView>
    </View>
  )

}

export default AppBar;