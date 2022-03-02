import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Task() {
  return (
    <View style={styles.container}>
      <Text>test</Text>
      <Text>task</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
