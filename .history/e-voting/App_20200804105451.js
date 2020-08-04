import React from "react";
import { Button, StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Login,
  Dashboard,
} from "./src/screens";
import "react-native-gesture-handler";

export default function App() {
  const Stack = createStackNavigator();

  return (

    <NavigationContainer style={styles.container}>

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
      style={styles.container}
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
  container: {
flex: 0.5,

  },
 disclaimer: {
  backgroundColor: '#38d2c9',
  height: 100,
  width: '100%',
  flex: 1,

 },
 
});
