
import Main from "./src/components/Main"
import { NativeRouter } from 'react-router-native'

import createApolloClient from './src/utils/apolloClient';
import { ApolloProvider } from '@apollo/client'; 

// import Constants from 'expo-constants';

import AuthStorage from './src/utils/authStorage'

import AuthStorageContext from './src/contexts/AuthStorageContext'

const App = () => {
  // console.log('Constants.manifest.extra', Constants.manifest.extra)
  // const apolloClient = createApolloClient()

  const authStorage = new AuthStorage()
  const apolloClient = createApolloClient(authStorage)
  
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <AuthStorageContext.Provider value={authStorage}>
            <Main />
          </AuthStorageContext.Provider>
        </ApolloProvider>
      </NativeRouter>
    </>
  )
}

export default App
