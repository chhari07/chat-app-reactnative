import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.Button} onPress={onPress}>
      <Text style={styles.ButtonText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Button: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7287b',
  },
  ButtonText: {
    color: 'black',
    fontSize: 16,
  },
});

export default Button;
