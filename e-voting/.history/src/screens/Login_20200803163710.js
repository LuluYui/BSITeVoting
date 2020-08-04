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
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../assets/HK_night.png")}
        >
          <Image source={require("../assets/vote_button_logo.png")} />
          <Text style={styles.titleText}>BSIT VOTING SYSTEM</Text>
        </ImageBackground>

        <View style={styles.card}>
        <Text>
            USER ID
        </Text>
            <TextInput style={styles.textInput}>
                Hellow input
            </TextInput>
          <TouchableOpacity
            style={styles.button}
          >
            <Text style={styles.appButtonText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text>© 2019 Blue Sea I.T. Limited. All Rights Reserved.</Text>
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
  card: {
    shadowOpacity: 0.3,
    shadowRadius: 5,
    backgroundColor: "#f4f4f4",
    width: "90%",
    height: 200,
    borderWidth: 2,
    borderColor: "#dddddd",
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingLeft: 20,
  },
  titleText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 10,
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 0.5,
    height:20,
    paddingHorizontal: 100,
  },
  button: {
    height: 30,
    backgroundColor: "#38d2c9",
    opacity: 100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 120,
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
