import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Octicons from "@expo/vector-icons/Octicons";
import Entypo from "@expo/vector-icons/Entypo";
import {
  Alert,
  Button,
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MovieList from "./components/movieList";

export default function App() {
  return (
    <View>
      <MovieList />
      <StatusBar backgroundColor={"green"}></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 20,
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
});
