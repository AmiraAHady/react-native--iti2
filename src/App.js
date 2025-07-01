import { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  Alert,
  Button,
  FlatList,
  Image,
  ImageBackground,
  Platform,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/home";
import About from "./screens/about";
import Vision from "./screens/vision";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: true,
          headerStyle: { backgroundColor: "pink" },
          headerTitleStyle: { color: "blue", fontWeight: "bold" },
          headerTintColor: "green",
          headerTitleAlign: "center",
          // animation:'slide_from_bottom'
          // headerTitle:'My App'
          headerLeft: () => (
            <AntDesign name="leftsquare" size={26} color="green" />
          ),
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: "Home Page",
          }}
        />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Vision" component={Vision} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    // padding: 20,
    marginTop: 20,
    flex: 1,
    // alignItems: "center",
    // backgroundColor:'lightblue'
  },
  title: {
    fontSize: 16,
    fontWeight: "300",
  },
  img: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  imgText: {
    color: "white",
    fontSize: 25,
    lineHeight: 26,
    marginHorizontal: "auto",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,.6)",
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  textinput: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
    width: 300,
    marginTop: 10,
  },
  inputFocus: {
    borderColor: "#007bff",
    backgroundColor: "lightblue",
  },
  button: {
    backgroundColor: "green",
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
  inputLable: { marginBottom: 6, color: "grey", fontWeight: "bold" },
  background: {
    flex: 1,
    justifyContent: "center",
  },
});
