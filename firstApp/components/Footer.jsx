import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native';

import React from 'react'

export default function Footer() {
  return (
     <View style={styles.Footer}>
          <Text style={styles.Footer}>Fotter</Text>
        </View>
  )
}


const styles = StyleSheet.create({
  header: {
    height: 50,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#f7287b', 
  },
  title: {
    color: 'white',
    fontSize: 20, 
  },
});
