import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import Constants from 'expo-constants'
import { relayStylePagination } from '@apollo/client/utilities'

const httpLink = createHttpLink({
  // Replace the IP address part with your own IP address!
  uri: Constants.manifest.extra.apolloUri
})

const createApolloClient = (authStorage) => {
  const authLink = setContext(async (_, { headers }) => {
    try {
      const accessToken = await authStorage.getAccessToken()
      // console.log('accessToken', accessToken)
      // console.log('headers', headers)
      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` : "",
        }
      }
    } catch (e) {
      console.log('e', e)
      return {
        headers
      }
    }
  })

  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          repositories: relayStylePagination()
        },
      },
      Repository: {
        fields: {
          reviews: relayStylePagination(),
        },
      }
    },
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: cache,
  })
};

export default createApolloClient;