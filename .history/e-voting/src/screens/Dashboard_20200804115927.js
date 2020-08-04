import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image} from 'react-native';

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
                <Icon name="vote" size={30} color="#fff"/>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});