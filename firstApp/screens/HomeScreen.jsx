import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Button, KeyboardAvoidingView, Platform } from 'react-native';
import { io } from 'socket.io-client';

// Replace 'YOUR_LOCAL_IP' with your actual local IP address
const socket = io('http://192.168.29.90:3000');


const HomeScreen = ({ route }) => {
  const { username } = route.params;
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  useEffect(() => {
    // Listen for messages from the server (including "hello", "1", "2", "3")
    socket.on('receive_message', (data) => {
      console.log('Received message:', data);  // Debugging received data
      setChat((prevChat) => [...prevChat, { id: Date.now().toString(), ...data }]);
    });

    // Cleanup socket listener on component unmount
    return () => {
      socket.off('receive_message');
    };
  }, []);

  const handleSend = () => {
    if (message.trim()) {
      const msgData = {
        user: username,
        text: message,
      };
      console.log('Sending message:', msgData);  // Debugging message sent
      socket.emit('send_message', msgData);
      setMessage('');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={100}
    >
      <Text style={styles.header}>Welcome, {username}</Text>

      <FlatList
        data={chat}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Text style={styles.user}>{item.user}: </Text>
            <Text style={styles.message}>{item.text}</Text>
          </View>
        )}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={message}
          onChangeText={setMessage}
        />
        <Button title="Send" onPress={handleSend} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  messageContainer: {
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    marginVertical: 5,
  },
  user: {
    fontWeight: 'bold',
  },
  message: {
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 'auto',
    alignItems: 'center',
    gap: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
});

export default HomeScreen;
