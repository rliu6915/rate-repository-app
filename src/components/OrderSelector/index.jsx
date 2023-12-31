import { Button, Menu, Divider, PaperProvider } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { useState } from 'react';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  }, 
  buttonStyle: {
    flexDirection: "row-reverse",
    fontSize: 14,
    fontFamily: "Arial",
    color: "black",
  },
  menuStyle: {
    backgroundColor: 'white',
  },
  itemStyle: {
    fontSize: 14,
    fontFamily: "Arial",
    color: "black",
  },
  itemStyleDisabled: {
    fontSize: 14,
    fontFamily: "Arial",
  }
})

const OrderSelector = ({order, setOrder, setOrderBy, setOrderDirection}) => {
  const [visible, setVisible] = useState(false)

  const openMenu = () => {
    setVisible(true)
  }
  const closeMenu = () => {
    setVisible(false)
  }

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
          anchor={
          <Button 
            onPress={openMenu} 
            icon="chevron-down" 
            textColor='black'
            contentStyle={styles.buttonStyle}
          >
            {order}
          </Button>}
          anchorPosition='bottom'
          // theme={{ colors: { elevation: { level2: 'white' } } }}
          contentStyle={styles.menuStyle}
        >
          <Menu.Item title="Select an item..." titleStyle={styles.itemStyleDisabled} disabled/>
          <Divider />
          <Menu.Item onPress={onPress} title="Latest repositories" titleStyle={styles.itemStyle} />
          <Menu.Item onPress={onPressOne} title="Highest rated repositories" titleStyle={styles.itemStyle} />
          <Menu.Item onPress={onPressTwo} title="Lowest rated repositories" titleStyle={styles.itemStyle} />
        </Menu>
      </View>
    </PaperProvider>
  )
}

export default OrderSelector