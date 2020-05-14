import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CameraScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>CameraScreen</Text>
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

export default CameraScreen;
