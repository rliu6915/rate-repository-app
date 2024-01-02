import { View, StyleSheet, 
  Dimensions, ScrollView, Text } 
from 'react-native'

import AppBarTab from './AppBarTab'
import { useQuery } from '@apollo/client';

import { ME } from '../../graphql/queries'

import { useApolloClient } from '@apollo/client'
import useAuthStorage from '../../hooks/useAuthStorage'

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
});

const AppBar = () => {
  const apolloClient = useApolloClient()
  const authStorage = useAuthStorage()

  const onPressFunction = () => {
    console.log('Repositories pressed')

  }

  const onPressFunctionOne = () => {
    console.log('Sign in pressed')
  }

  const onPressFunctionTwo = async () => {
    console.log('Sign out pressed')
    await authStorage.removeAccessToken()
    apolloClient.resetStore()
  }

  const { loading, error, data } = useQuery(ME, {
    fetchPolicy: 'cache-and-network'
  })

  console.log("ME", data)

  if (loading) {
    return <View><Text>Loading...</Text></View>
  }

  if (error) return `Error! ${error.message}`;

  return (
    <View style={styles.container}>
      <ScrollView horizontal >
        <AppBarTab text="Repositories" onPressFunction={onPressFunction} path="/" />
        {data.me ? (
          <AppBarTab text="Sign out" onPressFunction={onPressFunctionTwo} />
        ) : (
          <AppBarTab text="Sign in" onPressFunction={onPressFunctionOne} path="/signin" />
        )}
        {/* <AppBarTab text="Sign in" onPressFunction={onPressFunctionOne} path="/signin" />
        <AppBarTab text="Sign out" onPressFunction={onPressFunctionTwo} /> */}
      </ScrollView>
    </View>
  )

}

export default AppBar;