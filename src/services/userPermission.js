import {PermissionsAndroid, Platform} from 'react-native';

export  default async function requestNotificationPermission() {
  if (Platform.OS === 'android') {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("Notification permission granted");
    } else {
      console.log("Notification permission denied");
    }
  }
}