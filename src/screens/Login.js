import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HugeiconsIcon } from '@hugeicons/react-native';
import { SearchIcon } from '@hugeicons/core-free-icons';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:30, marginTop:20}}>
      <Text style={{fontSize:30, fontWeight:500}}>Students</Text>
      <HugeiconsIcon icon={SearchIcon} />
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    marginTop:20
  }
})