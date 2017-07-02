import React, { Component } from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import { StackNavigator } from "react-navigation";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

const App = props => {
  const { navigate } = props.navigation;

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to React Native Navigation Sample!
      </Text>
      <Button
        onPress={() => navigate("SecondScreen")}
        title="Go to Second Screen"
      />
    </View>
  );
};

export default App;
