import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import App from './src/App'
import { DrawerNavigator } from 'react-navigation';
import SecondScreen from './src/SecondScreen'

class reactNavigationSample extends Component {

  render(){
    const { navigation } = this.props;

    return (
      <App navigation = {navigation}/>
    );
  }
}

const SimpleApp = DrawerNavigator({
  Home: { screen: App },
  SecondScreen: { screen: SecondScreen }
});

AppRegistry.registerComponent('reactNavigationSample', () => SimpleApp);
