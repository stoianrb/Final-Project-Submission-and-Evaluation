// src/app/components/HomeScreen.js
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  const data = [
    { id: '1', title: 'Item 1', description: 'Descriere 1' },
    // Adaugă date reale sau dummy data
  ];

  return (
    <View style={{ flex:1 }}>
      <View style={styles.header}>
        <Image source={require('../../../assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>My App</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text onPress={() => navigation.navigate('Detail', { item })}>
              {item.title}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection:'row', alignItems:'center', padding:16 },
  logo:   { width:40, height:40, marginRight:8 },
  title:  { fontSize:20, fontWeight:'bold' },
  item:   { padding:16, borderBottomWidth:1, borderColor:'#eee' }
});
