import {
  View,
  FlatList,
  StyleSheet,
  StatusBar,
} from 'react-native';

import PressRepoItem from './PressRepoItem';
import RepositoryListHeader from "./RepositoryListHeader"
import React from 'react';
import RepositoruListFooter from './RepositoryListFooter';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    flexDirection: "row",
    marginTop: StatusBar.currentHeight || 0
  },
  listHeader: {
    zIndex: 1
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

// const RepositoryListContainer = ({ repositories, order, setOrder, setOrderBy, setOrderDirection, setSearchQuery, searchQuery }) => {
//   // const { repositories } = useRepositories()

//   // Get the nodes from the edges array
//   const repositoryNodes = repositories
//   ? repositories.edges.map(edge => edge.node)
//   : []

//     const listHeaderComponent = () =>
//       <RepositoryListHeader 
//         order={order} 
//         setOrder={setOrder} 
//         setOrderBy={setOrderBy} 
//         setOrderDirection={setOrderDirection} 
//         searchQuery={searchQuery} 
//         setSearchQuery={setSearchQuery}
//       />

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         ListHeaderComponent={listHeaderComponent}
//         ListHeaderComponentStyle={styles.listHeader}
//         data={repositoryNodes}
//         renderItem={({item}) => <PressRepoItem item={item} />}
//         keyExtractor={item => item.id}
//         ItemSeparatorComponent={ItemSeparator}
//       />
//     </SafeAreaView>
//   )
// }
// export default RepositoryListContainer;

class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const { order, setOrder, setOrderBy, setOrderDirection, setSearchQuery, searchQuery } = this.props

    return (
      <RepositoryListHeader
        order={order}
        setOrder={setOrder}
        setOrderBy={setOrderBy}
        setOrderDirection={setOrderDirection}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    )
  }

  render() {
    const { repositories, onEndReached } = this.props
    const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : []
    //console.log(repositoryNodes)

    return (
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={this.renderHeader}
          ListHeaderComponentStyle={styles.listHeader}
          data={repositoryNodes}
          renderItem={({item}) => <PressRepoItem item={item} />}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={ItemSeparator}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.5}
          contentContainerStyle={{ paddingBottom: 100 }}
          ListFooterComponent={() => <RepositoruListFooter />}
        />
      </View>
    )
  }
}

export default RepositoryListContainer