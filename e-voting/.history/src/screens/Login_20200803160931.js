import React, { Component } from "react";
import { View, Fragment, StyleSheet, Image,
     TextInput, Text, Button, ImageBackground } from "react-native";

export default class Login extends Component {
  render() {
    return (
        
       
      <View style={styles.container}>
         <ImageBackground style={styles.image}
        source={require("../assets/HK_night.png")}
   >
        <Image
          source={require("../assets/vote_button_logo.png")}/>
          <Text style={styles.titleText}>BSIT VOTING SYSTEM</Text>
        </ImageBackground>
        
     
        
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
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
  },
  card: {
      marginTop: 50,
      shadowOpacity: 0.3,
      shadowRadius: 5,
      backgroundColor: "#f4f4f4",
      width: '90%',
      height: 200,
      borderWidth: 2,
      borderColor: "#dddddd"
  },
  titleText: {
    color: "white",
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
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
    width: '100%', 
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 40,
  },
});
