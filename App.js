import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore, combineReducers } from "redux";
import Navigator from "./navigation/Navigator";
import { Provider } from "react-redux";
import imagesReducer from "./store/reducers/imagesReducer";

const rootReducer = combineReducers({
  images: imagesReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
