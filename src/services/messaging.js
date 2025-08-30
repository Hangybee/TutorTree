import messaging from '@react-native-firebase/messaging';

// Foreground messages
messaging().onMessage(async remoteMessage => {
    console.log('Foreground message:', remoteMessage);
    // show local notification via notifee or native API
  });
  
  // Background (Android/iOS) — register once at top-level (e.g., index.js)
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Background message:', remoteMessage);
    // optional: show local notification
  });