import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { MyStack } from './src/navigation/stackNavigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {requestUserPermission, getFcmToken} from './src/services/notification'
import messaging from '@react-native-firebase/messaging';
import requestNotificationPermission  from './src/services/userPermission'

const App = () => {
  useEffect(() => {
    requestNotificationPermission()
    requestUserPermission();
    getFcmToken();

    // Foreground handler
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message arrived!', remoteMessage);
      // Display notification, update UI, etc.
    });

    // Background or quit state handler
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });

    return unsubscribe;
  }, []);
  return (
    <SafeAreaProvider>
      <NavigationContainer >
        <MyStack />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({})