import {
  View,
  FlatList,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import RepositoryItem from '../RepositoryItem';
// import { useState, useEffect } from 'react';

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

const RepositoryListContainer = ({ repositories }) => {
  // const { repositories } = useRepositories()

  // Get the nodes from the edges array
  const repositoryNodes = repositories
  ? repositories.edges.map(edge => edge.node)
  : []

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

export default RepositoryListContainer;