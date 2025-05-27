// src/app/components/LoginScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      setError('Completează email și parolă');
      return;
    }
    // TODO: Apelează API-ul de autentificare
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Email"    value={email}    onChangeText={setEmail}    keyboardType="email-address" style={styles.input} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Log In" onPress={handleLogin} />
      <Text style={styles.link} onPress={() => navigation.navigate('Signup')}>
        Nu ai cont? Înregistrează-te
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
