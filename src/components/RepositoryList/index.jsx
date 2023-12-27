import {
  View,
  FlatList,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text
} from 'react-native';

import RepositoryItem from '../RepositoryItem';
// import { useState, useEffect } from 'react';

// import useRepositories from '../../hooks/useRepositories'
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../../graphql/queries';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    flexDirection: "row",
    marginTop: StatusBar.currentHeight || 0
  }
});

// const repositories = [
//   {
//     id: 'jaredpalmer.formik',
//     fullName: 'jaredpalmer/formik',
//     description: 'Build forms in React, without the tears',
//     language: 'TypeScript',
//     forksCount: 1589,
//     stargazersCount: 21553,
//     ratingAverage: 88,
//     reviewCount: 4,
//     ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
//   },
//   {
//     id: 'rails.rails',
//     fullName: 'rails/rails',
//     description: 'Ruby on Rails',
//     language: 'Ruby',
//     forksCount: 18349,
//     stargazersCount: 45377,
//     ratingAverage: 100,
//     reviewCount: 2,
//     ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
//   },
//   {
//     id: 'django.django',
//     fullName: 'django/django',
//     description: 'The Web framework for perfectionists with deadlines.',
//     language: 'Python',
//     forksCount: 21015,
//     stargazersCount: 48496,
//     ratingAverage: 73,
//     reviewCount: 5,
//     ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
//   },
//   {
//     id: 'reduxjs.redux',
//     fullName: 'reduxjs/redux',
//     description: 'Predictable state container for JavaScript apps',
//     language: 'TypeScript',
//     forksCount: 13902,
//     stargazersCount: 52869,
//     ratingAverage: 0,
//     reviewCount: 0,
//     ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
//   },
// ];

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  // const [repositories, setRepositories] = useState()

  // const fetchRepositories = async () => {
  //   // Replace the IP address part with your own IP address!
  //   const response = await fetch('http://10.68.118.153:5001/api/repositories');
  //   const json = await response.json();

  //   console.log(json);

  //   setRepositories(json);
  // }

  // useEffect(() => {
  //   fetchRepositories();
  // }, [])

  // const { repositories } = useRepositories()

  const result = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network'
  })

  // Get the nodes from the edges array
  const repositories = result.data.repositories
  const repositoryNodes = repositories
  ? repositories.edges.map(edge => edge.node)
  : []

  if (result.loading) {
    return <View><Text>Loading...</Text></View>
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={repositoryNodes}
        renderItem={({item}) => <RepositoryItem props={item} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={ItemSeparator}
      />
    </SafeAreaView>
  )
}

export default RepositoryList;