import { StatusBar, View, Dimensions } from 'react-native'

const statusBarHeight = Dimensions.get('window').height * 0.05;

const CustomStatusBar = () => {
  return (
    <View style={{ height: statusBarHeight }}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        // barStyle="light-content"
      />
    </View>
  );
}

export default CustomStatusBar