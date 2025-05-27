// src/app/components/NotificationsConfig.js
import React, { useEffect } from 'react';
import { View, Button } from 'react-native';
import * as Notifications from 'expo-notifications';

export default function NotificationsConfig() {
  useEffect(() => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({ shouldShowAlert: true }),
    });
  }, []);

  const scheduleTest = () => {
    Notifications.scheduleNotificationAsync({
      content: { title: 'Test Notification', body: 'Aceasta e o notificare de test.' },
      trigger: { seconds: 5 },
    });
  };

  return (
    <View style={{ padding:16 }}>
      <Button title="Trigger Test Notification" onPress={scheduleTest} />
    </View>
  );
}
