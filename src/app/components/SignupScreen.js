// src/app/components/SignupScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function SignupScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');

  const handleSignup = () => {
    if (!username || !email || !password) {
      setError('Toate câmpurile sunt obligatorii');
      return;
    }
    // TODO: Apelează API-ul de înregistrare
    // la succes: navigation.navigate('Login');
    // la eroare: setError('Eroare la înregistrare');
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Username" value={username} onChangeText={setUsername} style={styles.input} />
      <TextInput placeholder="Email"    value={email}    onChangeText={setEmail}    keyboardType="email-address" style={styles.input} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Sign Up" onPress={handleSignup} />
      <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
        Already have an account? Log in
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', padding:16 },
  input:     { borderWidth:1, borderColor:'#ccc', marginBottom:12, padding:8 },
  error:     { color:'red', marginBottom:12 },
  link:      { color:'blue', marginTop:12, textAlign:'center' }
});
