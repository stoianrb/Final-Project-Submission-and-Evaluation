// src/app/components/SettingsScreen.js
import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function SettingsScreen() {
  const [darkMode, setDarkMode]         = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>
      <View style={styles.row}>
        <Text>Notifications</Text>
        <Switch value={notifications} onValueChange={setNotifications} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:16 },
  row:       { flexDirection:'row', justifyContent:'space-between', marginBottom:16 }
});
