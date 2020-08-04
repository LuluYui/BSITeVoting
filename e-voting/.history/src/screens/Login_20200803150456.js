import React, { Component } from "react";
import { View, StyleSheet, Image, TextInput, Text, Button } from "react-native";
import { Card } from "react-native-cardview";

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../assets/vote_button_logo.png")}
        />
        


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
      shadowColor: "grey",
      shadowRadius: 5,
      width: '90%',
      height: '50',
  },
  textInput: {
    width: '100%',
  },
  button: {
    width: '100%',
    height: 30,
    
  },
  image: {
    width: '100%', 
    height: 50 
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 40,
  },
});
