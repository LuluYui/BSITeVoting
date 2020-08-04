import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Stack } from "@react-navigation/stack";
import Login from "./src/screens/Login";
import "react-native-gesture-handler";



export default function App() {
  

  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#38d2c9',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      >
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
