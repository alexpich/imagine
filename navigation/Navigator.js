import React from "react";
import { Platform } from "react-native";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import ImagesListScreen from "../screens/ImagesListScreen";
import MyImagesScreen from "../screens/MyImagesScreen";
import CameraScreen from "../screens/CameraScreen";

import Colors from "../constants/Colors";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
  headerTintColor: Platform.OS === "android" ? "#FFF" : Colors.primary,
};

const ImagesListNavigator = createStackNavigator({
  ImagesList: {
    screen: ImagesListScreen,
  },
});

const MyImagesNavigator = createStackNavigator({
  MyImages: {
    screen: MyImagesScreen,
  },
});

const CameraNavigator = createStackNavigator({
  Camera: {
    screen: CameraScreen,
  },
});

const tabScreenConfig = {
  ImagesList: {
    screen: ImagesListNavigator,
  },
  MyImages: {
    screen: MyImagesNavigator,
  },
  Camera: {
    screen: CameraNavigator,
  },
};

const MainTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        // activeColor: Colors.accent,
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accent,
        },
      });

const MainNavigator = createDrawerNavigator(
  {
    Home: {
      screen: MainTabNavigator,
      navigationOptions: {
        drawerLabel: "Home",
      },
    },
  },
  {
    contentOptions: {
      activeTintColor: Colors.accent,
      labelStyle: "open-sans-bold",
    },
  }
);

export default createAppContainer(MainNavigator);
