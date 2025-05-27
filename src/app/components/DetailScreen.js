// src/app/components/DetailScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailScreen({ route }) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description || 'Fără descriere'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:   { flex:1, padding:16 },
  title:       { fontSize:24, fontWeight:'bold', marginBottom:12 },
  description: { fontSize:16 }
});
