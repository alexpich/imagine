import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ImagesListScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>ImagesListScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ImagesListScreen;