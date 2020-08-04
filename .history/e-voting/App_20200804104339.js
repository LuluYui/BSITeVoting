import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Login,
  Dashboard,
  ImageBackground
} from "./src/screens";
import "react-native-gesture-handler";

export default function App() {
  const Stack = createStackNavigator();

  return (

    <NavigationContainer>
      <ImageBackground
          style={styles.image}
          source={require("../assets/HK_night.png")}
        >
          <Image source={require("../assets/vote_button_logo.png")} />
          <Text style={styles.titleText}>BSIT VOTING SYSTEM</Text>
        </ImageBackground>
      <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#38d2c9',
          height: 80,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
        },
      }}
      >
      
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ title: 'Dashboard' }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: 'Voting System' }}
      />
      
    </Stack.Navigator>
        <View style={styles.diclaimer}>
          <Text>© 2019 Blue Sea I.T. Limited. All Rights Reserved.</Text>
        </View>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
 disclaimer: {
  backgroundColor: '#38d2c9',
  height: 80,
 },
});
