import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../profile";
import SettingsScreen from "../settings";

const Stack = createNativeStackNavigator();
const Home = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>

    // <SafeAreaView>
    //   <Text style={{fontSize:16,margin:20}}>Home</Text>

    //   <Button title='About US' onPress={()=>{
    //     console.log('hello');
    //     // navigation.navigate('About',{message:'hello from Home'})

    //     // navigation.navigate('About')
    //   }}></Button>
    // </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
