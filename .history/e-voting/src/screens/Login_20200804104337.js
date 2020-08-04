import React, { Component } from "react";
import {
  View,
  Fragment,
  StyleSheet,
  Image,
  TextInput,
  Text,
  Button,
  ImageBackground,
} from "react-native";
import { TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler";

export default class Login extends Component {

  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.card}>
          <Text style={styles.text}>USER ID</Text>
          <TextInput style={styles.textInput}></TextInput>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Dashboard")} style={styles.button}>
            <Text style={styles.appButtonText}>Login</Text>
          </TouchableOpacity>
        </View>

    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    alignSelf: 'flex-start',
  },
  card: {
    shadowOpacity: 0.3,
    shadowRadius: 5,
    backgroundColor: "#f4f4f4",
    width: "90%",
    height: 200,
    borderWidth: 2,
    borderColor: "#dddddd",
    justifyContent: "center",
    paddingLeft: 20,
  },
  titleText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 10,
  },
  textInput: {
    borderColor: "black",
    backgroundColor: "white",
    borderWidth: 1,
    height: 29,
    alignItems: "flex-start",
    marginTop: 20,
    width: "95%",
  },
  appButtonText: {
    color: 'white',
    fontWeight: 'bold',

  },
  button: {
    height: 30,
    backgroundColor: "black",
    opacity: 100,
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  image: {
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 40,
  },
});
