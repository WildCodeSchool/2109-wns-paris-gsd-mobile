import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Icon,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
// import Ionicons from "@expo/vector-icons/Ionicons";
export default function TaskDetailsScreen() {
  return (
    <View style={styles.container}>
      <View >
        {/* <Ionicons name={"notifications"} size={25} /> */}
        <Text>Project</Text>
      </View>
      <Text>one task</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
  },
});
