import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import App from './src/App'
import { TabNavigator } from 'react-navigation';
import SecondScreen from './src/SecondScreen'

class reactNavigationSample extends Component {

  render(){
    const { navigation } = this.props;

    return (
      <App />
    );
  }
}

const SimpleApp = TabNavigator({
  Home: { screen: App },
  SecondScreen: { screen: SecondScreen }
});

AppRegistry.registerComponent('reactNavigationSample', () => SimpleApp);
