import { StyleSheet } from 'react-native';
import theme from '../styles/theme.style.js';

export default StyleSheet.create({
    
PRIMARY_COLOR: '#38d2c9',
  largeButtonText: {
    fontSize: theme.FONT_SIZE_LARGE,
    fontWeight: theme.FONT_WEIGHT_HEAVY
  },
  largeHeaderText:{
    fontSize: theme.FONT_SIZE_LARGE
  },
  mediumHeaderText: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    color:theme.PRIMARY_COLOR
  }
});