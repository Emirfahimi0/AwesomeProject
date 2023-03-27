import React, { Fragment, FunctionComponent, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { user } from "../state/reducers";
import { RootStackParamList } from "../types";

interface ISearchFilterProps {
  input: string;
  user: user[];
  navigation: import("@react-navigation/native").NavigationProp<RootStackParamList>;
}

export const SearchFilter: FunctionComponent<ISearchFilterProps> = ({ input, user, navigation }: ISearchFilterProps) => {
  return (
    <View style={{ marginTop: 10 }}>
      <ScrollView>
        {user !== undefined && user.length !== 0 ? (
          <Fragment>
            {user.map((item, index) => {
              if (input === "") {
                return (
                  <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen", { id: item.id })}>
                    <View style={styles.item_course} key={item.id}>
                      <View>
                        <Text style={styles.txt_name}>
                          {index + 1}. {item.name}
                        </Text>
                        <Text style={styles.txt_item}>{item.username}</Text>
                        <Text>{item.website}</Text>
                      </View>
                      <View>
                        <TouchableOpacity>
                          <Text style={styles.txt_del}>Delete</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <Text style={styles.txt_edit}>Edit</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }
              if (item.name.toLowerCase().includes(input.toLowerCase())) {
                return (
                  <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen", { id: item.id })}>
                    <View style={styles.item_course} key={item.id}>
                      <View>
                        <Text style={styles.txt_name}>
                          {index + 1}. {item.name}
                        </Text>
                        <Text style={styles.txt_item}>{item.username}</Text>
                        <Text>{item.phone}</Text>
                      </View>
                      <View>
                        <TouchableOpacity>
                          <Text style={styles.txt_del}>Delete</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <Text style={styles.txt_edit}>Edit</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }
            })}
          </Fragment>
        ) : null}
      </ScrollView>
    </View>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({
  form: {
    padding: 15,
    backgroundColor: "#e3e3e3",
    marginTop: 10,
  },

  txtClose: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "right",
  },
  text_input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    marginTop: 10,
  },
  header_container: {
    padding: 15,
    backgroundColor: "#eeeeee",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  txt_main: {
    fontSize: 22,
    fontWeight: "bold",
  },
  item_course: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e2e2",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  txt_name: {
    fontSize: 15,
    marginTop: 5,
    fontWeight: "bold",
  },
  txt_item: {
    fontSize: 14,
    marginTop: 5,
  },
  txt_enabled: {
    fontSize: 14,
    marginTop: 5,
    color: "green",
    fontWeight: "bold",
  },
  txt_disabled: {
    fontSize: 14,
    marginTop: 5,
    color: "green",
    fontWeight: "bold",
  },
  txt_del: {
    fontSize: 14,
    marginTop: 5,
    color: "red",
    fontWeight: "bold",
  },
  txt_edit: {
    fontSize: 14,
    marginTop: 5,
    color: "blue",
    fontWeight: "bold",
  },
  btnContainer: {
    display: "flex",
    padding: 15,
    backgroundColor: "#000",
    marginTop: 20,
  },
  btnNewContainer: {
    padding: 10,
    backgroundColor: "#000",
  },
  textButton: {
    textAlign: "center",
    color: "#FFF",
  },
});
