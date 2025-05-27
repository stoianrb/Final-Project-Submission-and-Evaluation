// src/app/storage/LocalStorage.js
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function storeData(key, value) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Error storing data', e);
  }
}

export async function getData(key) {
  try {
    const json = await AsyncStorage.getItem(key);
    return json != null ? JSON.parse(json) : null;
  } catch (e) {
    console.error('Error reading data', e);
  }
}
