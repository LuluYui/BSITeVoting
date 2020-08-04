import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import AweIcon from 'react-native-vector-icons/FontAwesome'; 
import { ScrollView } from 'react-native-gesture-handler';

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
                <Icon name="vote" size={50} color="#000" />
                <AweIcon name="bar-chart" size={50} color="#000"/>
            </View>
            
            <ScrollView style={styles.scrollView}>
            <View style={styles.card}>
            </View>
            </ScrollView>
            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollView: {
        flex: 1,
        width: '100%',

    },
    menuButton: {
        flexDirection: "row",
        margin:30,
        width: '50%',
        justifyContent: "space-evenly"
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

});