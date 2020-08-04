import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/Login";


export default function App() {
  

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
        name="Voting System"
        component={HomeScreen}
        options={{ title: 'homescreen' }}
      />
      <Login />
    </Stack.Navigator>
      
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
 
});
