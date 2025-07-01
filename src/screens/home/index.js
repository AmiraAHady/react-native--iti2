import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = ({navigation}) => {
  return (
    <SafeAreaView> 
      <Text style={{fontSize:16,margin:20}}>Home</Text>
      <Button title='About US' onPress={()=>{
        console.log('hello');
        navigation.navigate('About',{message:'hello from Home'})

        // navigation.navigate('About')
      }}></Button>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})