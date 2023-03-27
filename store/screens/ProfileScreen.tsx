import React, { Fragment, useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, State } from "../../store";
import { loadUser } from "../actions/UserAction";
import CardUser from "../components/cardUser";
import Loader from "../components/Loader";

const ProfileScreen = ({ route }) => {
  const user_id = route.params.id;
  console.log(user_id);
  const { loading, user: user } = useSelector((state: State) => state.user);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    console.log("Loading = ", loading);
    if (loading) {
      dispatch(loadUser(user_id));
    }
  }, [loading]);

  return (
    <Fragment>
      {loading === false ? (
        <View>
          <Text>User Data</Text>
          <FlatList data={user} renderItem={({ item }) => <CardUser data={item} />} keyExtractor={(item) => item.id} />
        </View>
      ) : (
        <Loader />
      )}
    </Fragment>
  );
};

export default ProfileScreen;
