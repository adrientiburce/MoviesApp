import React from "react";
import {StyleSheet, View} from "react-native";

import Search from "./components/SearchClass";
// import Search from "./components/Search";
import FlexScreen from "./components/FlexScreen";

import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";

if(__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}


const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Search />
    </View>
  );
};

const MainNavigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  FlexScreen: {screen: FlexScreen}
});

const App = createAppContainer(MainNavigator);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
