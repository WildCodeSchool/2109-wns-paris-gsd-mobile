import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  containerFlexRow,
  textUppercase,
  buttonFilter,
} from "../../style/common.style";
import theme from "../../style/theme.style";

export default function TasksFilterButton() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>My Tasks</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Hide Done</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    ...containerFlexRow,
  },
  button: {
    ...buttonFilter,
  },
  text: {
    fontSize: theme.FONT_SIZE_S,
    fontWeight: theme.FONT_WEIGHT_MEDIUM,
    ...textUppercase,
  },
});
