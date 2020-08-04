import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/Login";
import "react-native-gesture-handler";

export default function App() {
  const Stack = createStackNavigator();

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
          fontSize: 25,
        },
      }}
      >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: 'Voting System' }}
      />

    </Stack.Navigator>
      
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
 
});
