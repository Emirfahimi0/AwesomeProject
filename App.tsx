import React, { useState } from "react";
import { Provider } from "react-redux";

import { store } from "./store";
import StackNavigator from "./store/components/StackNavigator";

function App() {
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
}

export default App;

//npx react-native run-ios
