import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ContactCard = ({userItem}) => {
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Google_Contacts_icon_%282022%29.svg/1733px-Google_Contacts_icon_%282022%29.svg.png",
        }}
        style={styles.contactImage}
      ></Image>
      <View>
        <Text style={{ marginLeft: 10, fontWeight: "bold" }}>{userItem.name}</Text>
        <Text style={{ marginLeft: 10, color: "grey" }}>{userItem.mobile}</Text>
      </View>
    </View>
  );
};

export default ContactCard;

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
});
