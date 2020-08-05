import React, { Component, setState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Text,
  ImageBackground,
} from "react-native";
import { TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler";
import Button from '../components/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ipAddress from "../ipAddress";

export default class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      items: {},
      qr_code: '',
    };
  }

  ComponentDidMount() {
    this.getQRCode();
  }

  getQRCode = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        qr_code: this.state.qr_code,
      })
    };

    fetch(`http://${ipAddress}:3000/qr_code`, options)
      .then((response) => response.json())
      .then((data) => {
         if (data.length > 0){
          this.props.navigation.navigate('Dashboard');
         }
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  };

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerLeft: () => (
        <Icon name="qrcode-scan" 
        size={30} 
        onPress={() => navigation.navigate('Dashboard')}
        style={{color:'white', marginHorizontal: 13}}/>
      ),
      /* the rest of this config is unchanged */
    };
  };

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
          <Text style={styles.text}>USER ID</Text>
          <TextInput style={styles.textInput} autoCapitalize = 'none' onChangeText={(text) => this.setState({ qr_code: text })}></TextInput>

          <Button onPress={() => this.getQRCode()} title="Login"></Button>
        </View>
        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  card: {
    shadowOpacity: 0.3,
    shadowRadius: 5,
    backgroundColor: "#f4f4f4",
    width: "90%",
    height: 200,
    borderWidth: 2,
    borderColor: "#dddddd",
    justifyContent: "center"
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
    marginTop: 10,
    alignSelf: 'center',
    width: "90%",
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
  }
});
