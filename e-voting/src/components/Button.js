import React, { memo } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


const Button = ({ onPress, title}) => (

   <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{title}</Text>
          
  </TouchableOpacity>


  
);

const styles = StyleSheet.create({
  appButtonContainer: {
    height: 30,
    backgroundColor: "black",
    opacity: 100,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: 'center',
    marginTop: 10,
  },
  appButtonText: {
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    color: 'white',
    fontWeight: 'bold',

  }
});

export default memo(Button);
