import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  Image,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  tabIcon: {
    width: 16,
    height: 16,
  },
});

const App = ()  => {

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to React Native Navigation Sample!
      </Text>
    </View>
  );
}

App.navigationOptions = {
  tabBar: {
      icon: () => (
        <Image
          source={require('../imgs/home.png')}
          style={[styles.tabIcon, {tintColor: 'black'}]}
        />
  )}
};

export default App
