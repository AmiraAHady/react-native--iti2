import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// const Stack = createNativeStackNavigator();
const Tap = createBottomTabNavigator();
// const TopTap = createMaterialTopTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tap.Navigator
        screenOptions={{
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "blue",
          headerShown: false,
        }}
      >
        <Tap.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home Page",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={26} color={color} />
            ),
            headerTitle: "hello home",
          }}
        />
        <Tap.Screen
          name="About"
          component={About}
          options={{
            tabBarLabel: "Home Page",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="infocirlceo" size={26} color={color} />
            ),
          }}
        />
        <Tap.Screen
          name="Vision"
          component={Vision}
          options={{
            tabBarLabel: "Home Page",
            tabBarIcon: ({ color, size }) => (
              <Feather name="message-circle" size={26} color={color} />
            ),
          }}
        />
      </Tap.Navigator>
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
