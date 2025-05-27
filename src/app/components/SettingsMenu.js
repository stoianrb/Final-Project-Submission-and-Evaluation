// src/app/components/SettingsMenu.js
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsMenu() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
      <Ionicons name="settings-outline" size={28} />
    </TouchableOpacity>
  );
}
