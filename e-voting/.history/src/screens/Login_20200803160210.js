import React, { Component } from "react";
import { View, Fragment, StyleSheet, Image,
     TextInput, Text, Button, ImageBackground } from "react-native";

export default class Login extends Component {
  render() {
    return (
        
        <ImageBackground style={styles.image}
        source={require("../assets/HK_night.png")}
   >
        <Image
          source={require("../assets/vote_button_logo.png")}/>
        </ImageBackground>
        
      <View style={styles.container}>
        
       
     
        
         
        <View style={styles.card}>
          <Button
        title="Learn More"
        color="#841584"
        style={styles.button}
        accessibilityLabel="Learn more about this purple button"
        >
        </Button>
        </View>

      </View>
        

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
      shadowOpacity: 0.3,
      shadowRadius: 5,
      backgroundColor: "#f4f4f4",
      width: '90%',
      height: 200,
      borderWidth: 2,
      borderColor: "#dddddd"
  },
  textInput: {
    width: '100%',
  },
  button: {
    width: '100%',
    height: 30,
    backgroundColor: '#38d2c9',
    opacity:100,
  },
  image: {
    width: 50, 
    height: 50,
    alignItems: 'flex-start'
    flex: 0.3,

  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 40,
  },
});
