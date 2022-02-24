import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import {
  inputSelect,
  marginAutoRL,
  marginAutoTB,
} from "../../style/common.style";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TaskDelete() {
  return (
    <TouchableOpacity>
      <View style={styles.button}>
        <Ionicons name="trash-outline" size={30} style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    ...inputSelect,
    ...marginAutoRL,
  },
  icon: {
    ...marginAutoRL,
    ...marginAutoTB,
  },
});
