import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { HugeiconsIcon } from '@hugeicons/react-native';
import { SearchIcon } from '@hugeicons/core-free-icons';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={{rowGap:10}}>
      <View style={{rowGap:7}}>
        <Text style={{fontSize:30, fontWeight:700}}>Login</Text>
        <Text style={{color:'gray', fontSize:15, fontWeight:600}}>Welcome back to the app</Text>
      </View>
      <View style={{flexDirection:'row', columnGap:20,}}>
        <Text style={{fontSize:18, fontWeight:600, color:'gray'}}>Email</Text>
        <Text style={{fontSize:18,fontWeight:600, color:'gray'}}>Phone Number</Text>
      </View>
      <View style={{rowGap:5}}>
        <Text style={{fontWeight:700}}>Email Address</Text>
        <TextInput placeholder='Email' style={{borderWidth:1, borderColor:'gray', borderRadius:8}}/>
      </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    marginTop:50,
    marginHorizontal:20
  }
})