import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  Button,
  View
} from 'react-native';

const styles = {
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
  tabIcon: {
    width: 16,
    height: 16,
  },
};

class SecondScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          THIS IS THE SECOND SCREEN!
        </Text>
        <Button 
        title="Press Me"
        onPress={() => {this.props.navigation.navigate('DrawerOpen')}}>
        Open the tab
        </Button>           
      </View>
    );
  }
}

SecondScreen.navigationOptions = {
  drawer: {
      icon: () => (
        <Image
          source={require('../imgs/home.png')}
          style={[styles.tabIcon, {tintColor: 'black'}]}
        />
  )}
};

export default SecondScreen
