import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import AweIcon from 'react-native-vector-icons/FontAwesome'; 

export default class Dashboard extends Component {



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

            <View style={styles.menuButton}> 
                <Icon name="vote" size={50} color="#fff" />
                <AweIcon name="bar-chart" size={50} color="#fff"/>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    menuButton: {
        flexDirection: "row",
        margin:30,
        justifyContent: "space-between"
    },
    titleText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        paddingTop: 10,
      },
    image: {
        width: "100%",
        height: 200,
        alignItems: "center",
        justifyContent: "center",
      },

});