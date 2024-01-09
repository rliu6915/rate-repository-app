import { View  } from "react-native"
import OrderSelector from "../OrderSelector"
import SearchBar from "../SearchBar"

const RepositoryListHeader = ({ order, setOrder, setOrderBy, setOrderDirection, searchQuery, setSearchQuery }) => {
  return (
    <View>
      <SearchBar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <OrderSelector
        order={order}
        setOrder={setOrder}
        setOrderBy={setOrderBy} 
        setOrderDirection={setOrderDirection}
      />
    </View>
  )
}

export default RepositoryListHeader