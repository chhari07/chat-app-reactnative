import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My 1st APP</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#f7287b', 
  },
  title: {
    color: 'white',
    fontSize: 20, 
  },
});
