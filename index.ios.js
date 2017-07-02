import React from "react";
import { AppRegistry } from "react-native";
import App from "./src/App";
import { StackNavigator } from "react-navigation";
import SecondScreen from "./src/SecondScreen";

const reactNavigationSample = props => {
  return <App navigation={props.navigation} />;
};

reactNavigationSample.navigationOptions = {
  title: "Home Screen"
};

const SimpleApp = StackNavigator({
  Home: { screen: reactNavigationSample },
  SecondScreen: { screen: SecondScreen, title: "Second Screen" }
});

AppRegistry.registerComponent("reactNavigationSample", () => SimpleApp);
