import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute } from '@react-navigation/native'

const About = ({navigation}) => {
  const route=useRoute()
  console.log(route.params.message);
  return (
    <SafeAreaView>
      <Text style={{fontSize:16,margin:20}}>About</Text>
      <Button title='Our Vision' onPress={()=>{
        navigation.navigate('Vision')

        // navigation.navigate('About')
      }}></Button>
    </SafeAreaView>
  )
}

export default About

const styles = StyleSheet.create({})