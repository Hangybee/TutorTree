import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { MyStack } from './src/navigation/stackNavigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'
const App = () => {
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