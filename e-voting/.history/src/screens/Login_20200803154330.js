import React, { Component } from "react";
import { View, Fragment, StyleSheet, Image,
     TextInput, Text, Button } from "react-native";

export default class Login extends Component {
  render() {
    return (
<Fragment>
        
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../assets/vote_button_logo.png")}
        />

      </View>
       
       <View style={[styles.card]}> 
       
<Button
        title="Learn More"
        color="#841584"
        style={styles.button}
        accessibilityLabel="Learn more about this purple button"
        >
            Login
        </Button>
           </View>
           
       
        


           </Fragment>

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
      shadowOpacity: 0.5,
      shadowRadius: 15,
      width: '90%',
      height: '50',
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
    height: 50 
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 40,
  },
});
