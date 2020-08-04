import React, { memo } from 'react';
import { StyleSheet, Button } from 'react-native';
import { theme } from '../core/theme';

const Button = ({ mode, style, children, ...props }) => (
  <Button
    style={[
      styles.button,
      mode === 'outlined' && { backgroundColor: 'black' },
      style,
    ]}
    labelStyle={styles.text}
    mode={mode}
    {...props}
  >
    {children}
  </Button>
);

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
});

export default memo(Button);
