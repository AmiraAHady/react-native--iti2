import { Button, Modal, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = ({ navigation }) => {
  const [isVisiable, setisVisiable] = useState(false);
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 16, margin: 20 }}>Profile Screen</Text>

      {/* <Button
        title="Settings"
        onPress={() => {
          navigation.navigate("Settings");
        }}
      ></Button> */}

      <Button
        title="Open Modal"
        onPress={() => {
          setisVisiable(true);
        }}
        color="pink"
      ></Button>

      <Modal visible={isVisiable} transparent>
        <View style={styles.modalStyle}>
          <View style={styles.content}>
            <Text>Hello From Modal</Text>
            <Button title="close" onPress={() => setisVisiable(false)}></Button>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  modalStyle: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,.4)",
  },
  content: {
    backgroundColor: "white",
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
});
