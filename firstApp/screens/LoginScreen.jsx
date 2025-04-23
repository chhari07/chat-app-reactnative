import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username.trim()) {
      navigation.navigate('Home', { username });
    } else {
      alert('Please enter a username');
    }
  };

  const goToHome = () => {
    navigation.navigate('Home', { username: username || 'Guest' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your username"
        value={username}
        onChangeText={setUsername}
      />

      <Button style={styles.loginbutton}  title="Login" onPress={handleLogin} />

      <View style={styles.homeButton}>
        <Button
          title="Home"
          onPress={goToHome}
          color="#4CAF50" // Green color
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 6,
    padding: 10,
    marginBottom: 15,
  },
  homeButton: {
    marginTop: 10,
    background:'#000',
  },
  loginbutton:{
    background:'#000',
  }
});

export default LoginScreen;
