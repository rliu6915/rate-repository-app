import { Button, Menu, Divider, PaperProvider } from 'react-native-paper';
import { View, StyleSheet} from 'react-native';
import { useState } from 'react';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  }
})

const OrderSelector = ({order, setOrder, setOrderBy, setOrderDirection}) => {
  const [visible, setVisible] = useState(false)
  // const [order, setOrder] = useState('Latest repositories')
  // const [orderBy, setOrderBy] = useState("CREATE_AT")
  // const [orderDirection, setOrderDirection] = useState("DESC")

  const openMenu = () => setVisible(true)
  const closeMenu = () => setVisible(false)

  const onPress = () => {
    setOrder('Latest repositories')
    setOrderBy("CREATED_AT")
    setOrderDirection("DESC")
    closeMenu()
  }
  const onPressOne = () => {
    setOrder('Highest rated repositories')
    // console.log('Highest rated repositories', order)
    setOrderBy("RATING_AVERAGE")
    setOrderDirection("DESC")
    closeMenu()
  }
  const onPressTwo = () => {
    setOrder('Lowest rated repositories')
    setOrderBy("RATING_AVERAGE")
    setOrderDirection("ASC")
    closeMenu()
  }
  
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu} icon="camera">{order}</Button>}
        >
          <Menu.Item title="Select an item..." disabled />
          <Divider />
          <Menu.Item onPress={onPress} title="Latest repositories" />
          <Menu.Item onPress={onPressOne} title="Highest rated repositories" />
          <Menu.Item onPress={onPressTwo} title="Lowest rated repositories" />
        </Menu>
      </View>
    </PaperProvider>
  )
}

export default OrderSelector