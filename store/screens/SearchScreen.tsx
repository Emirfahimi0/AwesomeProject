import React, { Fragment, useEffect, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, State } from "../../store";
import { getUser } from "../actions/UserAction";
import Loader from "../components/Loader";
import SearchFilter from "../components/SearchFilter";

const SearchScreen = ({ navigation }) => {
  const [Input, setInput] = useState<string>("");
  const dispatch: AppDispatch = useDispatch();

  const { user: userData, loading } = useSelector((state: State) => state.user);
  //const data: Idata = route.params.data;
  //const [Data, setData] = useState<string[]>([]);
  useEffect(() => {
    if (loading) {
      dispatch(getUser());
    }
  }, [loading]);
  return (
    <Fragment>
      <View style={styleView.container}>
        <View style={styleView.appContainer}>
          <TextInput value={Input} onChangeText={(text) => setInput(text)} style={styleView.Input} placeholder="Search" />
        </View>
        {loading === false ? <SearchFilter input={Input} user={userData} navigation={navigation} /> : <Loader />}
      </View>
    </Fragment>
  );
};

const styleView = StyleSheet.create({
  container: {
    margin: 15,
    width: "90%",
  },
  appContainer: {
    padding: 10,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#DCDFDE",
    borderRadius: 10,
    alignItems: "center",
  },
  FeatherStyle: {
    marginLeft: 1,
    marginRight: 4,
  },
  Input: {
    fontSize: 15,
    width: "100%",
  },
});

export default SearchScreen;
