import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CardUser = ({ data }) => {
  console.log(data.name);
  return (
    <View>
      <Text>{data.name}</Text>
    </View>
  );
};

export default CardUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#34495e",
  },
});
