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

export default function App() {
  const data = [
    {
      id: 1,
      name: "Ahmed",
      mobile: 202025698746,
      image:
        "https://i.ibb.co/WYp4sSG/jurica-koletic-7-YVZYZe-ITc8-unsplash.jpg",
    },

    {
      id: 2,
      name: "Taha",
      mobile: 20015638921,
      image:
        "https://i.ibb.co/ZzJsPzmN/midas-hofstra-a6-PMA5-JEm-WE-unsplash.jpg",
    },

    {
      id: 3,
      name: "Mahmoud",
      mobile: 305060801723,
      image:
        "https://i.ibb.co/Jjzxzt6b/alexander-hipp-i-EEBWg-Y-6l-A-unsplash.jpg",
    },

    {
      id: 4,
      name: "Maryam",
      mobile: 605080608010,
      image:
        "https://i.ibb.co/WvWDK2SC/alex-suprun-ZHv-M3-XIOHo-E-unsplash.jpg",
    },

    {
      id: 5,
      name: "Sara",
      mobile: 131415181917,
      image:
        "https://i.ibb.co/QFr5fFzZ/ana-itonishvili-Fyl8s-MC2j2-Q-unsplash.jpg",
    },

    {
      id: 6,
      name: "Tarek",
      mobile: 101014151690,
      image: "https://i.ibb.co/My79Kb6Q/images.jpg",
    },

    {
      id: 7,
      name: "hind",
      mobile: 305020101417,
      image:
        "https://i.ibb.co/7JydqfkG/happy-millennial-business-woman-glasses-posing-with-hands-folded-isolated-white-looking-camera-smili.jpg",
    },

    {
      id: 8,
      name: "Reem",
      mobile: 123698547890,
      image:
        "https://i.ibb.co/Jjzxzt6b/alexander-hipp-i-EEBWg-Y-6l-A-unsplash.jpg",
    },

    {
      id: 9,
      name: "Fady",
      mobile: 101112222333,
      image:
        "https://i.ibb.co/Jjzxzt6b/alexander-hipp-i-EEBWg-Y-6l-A-unsplash.jpg",
    },
    {
      id: 10,
      name: "Aya",
      mobile: 101112222333,
      image:
        "https://i.ibb.co/WYp4sSG/jurica-koletic-7-YVZYZe-ITc8-unsplash.jpg",
    },
    {
      id: 10,
      name: "Aya",
      mobile: 101112222333,
      image:
        "https://i.ibb.co/WYp4sSG/jurica-koletic-7-YVZYZe-ITc8-unsplash.jpg",
    },
    {
      id: 10,
      name: "Aya",
      mobile: 101112222333,
      image:
        "https://i.ibb.co/WYp4sSG/jurica-koletic-7-YVZYZe-ITc8-unsplash.jpg",
    },
    {
      id: 10,
      name: "Aya",
      mobile: 101112222333,
      image:
        "https://i.ibb.co/WYp4sSG/jurica-koletic-7-YVZYZe-ITc8-unsplash.jpg",
    },
    {
      id: 10,
      name: "Aya",
      mobile: 101112222333,
      image:
        "https://i.ibb.co/WYp4sSG/jurica-koletic-7-YVZYZe-ITc8-unsplash.jpg",
    },
    {
      id: 10,
      name: "Aya",
      mobile: 101112222333,
      image:
        "https://i.ibb.co/WYp4sSG/jurica-koletic-7-YVZYZe-ITc8-unsplash.jpg",
    },
  ];

  const [userName, setUserName] = useState("");
  const [inputText, setInputText] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [check, setIsCheck] = useState(false);
  const [contacts, setContacts] = useState(data);

  const filteredList = contacts.filter((item) =>
    item.name.toLowerCase().startsWith(inputText.toLowerCase())
  );

  // const handleData = (val) => {
  //   setUserName(val);
  // };

  // const toggleSwitch = (val) => {
  //   setIsCheck(val);
  // };

  const renderitem = ({ item }) => (
    <View style={styles.item}>
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Google_Contacts_icon_%282022%29.svg/1733px-Google_Contacts_icon_%282022%29.svg.png",
        }}
        style={styles.contactImage}
      ></Image>
      <View>
        <Text style={{ marginLeft: 10, fontWeight: "bold" }}>{item.name}</Text>
        <Text style={{ marginLeft: 10, color: "grey" }}>{item.mobile}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textinput}
        onChangeText={setInputText}
        value={inputText}
      ></TextInput>

      <FlatList
        data={filteredList}
        keyExtractor={(item) => item.id}
        renderItem={renderitem}
        ItemSeparatorComponent={() => (
          <View
            style={{ height: 1, backgroundColor: "red", marginLeft: 10 }}
          ></View>
        )}
        ListHeaderComponent={() => (
          <Text style={{ padding: 12, fontSize: 18, backgroundColor: "pink" ,marginHorizontal:'auto'}}>
            My Contact List
          </Text>
        )}
      ></FlatList>

      {/* <Text style={styles.title}>Login Form</Text>

      <Image source={require("./assets/hero.jpg")} style={styles.img}></Image>

      <Text style={styles.inputLable}>UserName</Text>
      <Ionicons name="person-circle" size={24} color="black" />
      <TextInput
        style={[styles.textinput, isFocus && styles.inputFocus]}
        placeholder="Enter User Name"
        value={userName}
        // onChangeText={(value)=>handleData(value)}
        onChangeText={setUserName}
        returnKeyType="done"
        textAlign="left"
        // maxLength={10}
        // multiline={true}
        // numberOfLines={3}
        // editable={false}
        // autoCorrect={true}
        // autoCapitalize="words"
        placeholderTextColor={"red"}
        selectionColor={"yellow"}
        // selectTextOnFocus
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      ></TextInput>
      <Text>You Typed :{userName}</Text> */}

      {/* <TextInput
        style={[styles.textinput]}
        placeholder="Enter Phone Number"
        value="02"
        onChangeText={setUserName}
        keyboardType="number-pad"
      ></TextInput> */}
      {/* <TextInput
        style={[styles.textinput]}
        placeholder="Enter Password"
        value={userName}
        onChangeText={setUserName}
        secureTextEntry={true}
      ></TextInput> */}

      {/* <Switch
        value={check}
        onValueChange={setIsCheck}
        thumbColor={check ? "green" : "pink"}
      ></Switch>

      <Octicons name="heart-fill" size={24} color="black" /> */}

      {/* 1 */}
      {/* <View style={{padding:40}}>
      <Button
        title="Login"
        color={"pink"}
        onPress={() => alert('user Login!')}
        // disabled
      />
      </View> */}
      {/* 
      <View>
        <TouchableOpacity
          onPress={() =>
            Alert.alert("Confirm Login", "Plz Confirm Your Login", [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
              { text: "OK", onPress: () => console.log("OK Pressed") },
            ])
          }
          style={styles.button}
        >
          <Text style={styles.text}>Click Me!</Text>
          {/* <Entypo name="login" size={24} color="black" /> */}
      {/* </TouchableOpacity>
      </View>  */}

      <StatusBar backgroundColor={"green"}></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  contactImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  item: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },

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
