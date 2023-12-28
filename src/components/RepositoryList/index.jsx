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

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  // const { repositories } = useRepositories()

  const {loading, error, data } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network'
  })

  // console.log('data', data)

  // Get the nodes from the edges array
  const repositoryNodes = data
  ? data.repositories.edges.map(edge => edge.node)
  : []

  if (loading) {
    return <View><Text>Loading...</Text></View>
  }

  if (error) return `Error! ${error.message}`;


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