import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Button from '../components/Button';

const Detailscreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Screen</Text>
      <Button
        title="Go"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7287b',
  },
  title: {
    color: 'white',
    marginBottom: 20,
    fontSize: 20,
  },
});

export default Detailscreen;
