// src/app/navigation/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator }  from '@react-navigation/stack';
import SignupScreen    from '../components/SignupScreen';
import LoginScreen     from '../components/LoginScreen';
import HomeScreen      from '../components/HomeScreen';
import DetailScreen    from '../components/DetailScreen';
import FavoritesScreen from '../components/FavoritesScreen';
import ApiIntegration  from '../components/ApiIntegration';
import SettingsMenu    from '../components/SettingsMenu';
import SettingsScreen  from '../components/SettingsScreen';
import NotificationsConfig from '../components/NotificationsConfig';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login"  component={LoginScreen} />
        <Stack.Screen name="Home"   component={HomeScreen} options={{ headerRight: () => <SettingsMenu /> }} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Favorites" component={FavoritesScreen} />
        <Stack.Screen name="API"      component={ApiIntegration} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Notifications" component={NotificationsConfig} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
