// src/app/components/FavoritesScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getData } from '../storage/LocalStorage';

export default function FavoritesScreen() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getData('favorites').then(data => {
      if (data) setFavorites(data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Favorite</Text>
      <FlatList
        data={favorites}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Text style={styles.item}>{item.title}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:16 },
  header:    { fontSize:20, fontWeight:'bold', marginBottom:12 },
  item:      { padding:8, borderBottomWidth:1, borderColor:'#ddd' }
});
