import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import AweIcon from 'react-native-vector-icons/FontAwesome'; 
import { ScrollView } from 'react-native-gesture-handler';

export default class Dashboard extends Component {



    render() {

        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollView}>
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
            
            
            <View style={styles.card}>
                <Text style={styles.heading}> Event Info</Text>
                <View style={styles.horiView}>
                <AweIcon name="etsy" size={20} color="#38d2c9"/>
                <Text style={styles.subHeading}>Current Event</Text>
                </View>
                <View style={styles.horiView}>
                <AweIcon name="calendar" size={20} color="#38d2c9"/>
                <Text style={styles.subHeading}>Date</Text>
                </View>
                <View style={styles.horiView}>
                <AweIcon name="location-arrow" size={20} color="#38d2c9"/>
                <Text style={styles.subHeading}>Event Location</Text>
                </View>
                <View style={styles.horiView}>
                <AweIcon name="info" size={20} color="#38d2c9"/>
                <Text style={styles.subHeading} paddingLeft="10" >Details</Text>
                </View>
               
                
                
            </View>
            </ScrollView>
            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    horiView: {
        flexDirection: 'row',
        margin: 6,
        alignItems: 'center',
        justifyContent: 'flex-start',

    },
    heading: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 24,
        color: 'black',
        alignSelf: 'center',
        marginTop: 20,
    },
    subHeading: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 14,
        color: 'black',
        alignSelf: 'flex-start',
        marginLeft: 5,

    },
    scrollView: {
        flex: 1,
        width: '100%'
    },
    menuButton: {
        flexDirection: "row",
        margin:30,
        width: '50%',
        alignSelf: 'center',
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
        alignSelf: 'center'
      },

});