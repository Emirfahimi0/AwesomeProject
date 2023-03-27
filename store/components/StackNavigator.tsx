import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import BankScreen from "../screens/BankScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import { RootStackParamList } from "../types";

const StackNavigator = () => {
  const RootStack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="SearchScreen">
        <RootStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <RootStack.Screen name="SearchScreen" component={SearchScreen} />
        <RootStack.Screen name="BankScreen" component={BankScreen} />
        <RootStack.Screen name="ProfileScreen" component={ProfileScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
