import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login'
import Welcome from '../screens/Welcome'

const Stack = createStackNavigator();

export function MyStack() {
    return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Login} />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
    );
  }