import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { card, textUppercase } from "../../style/common.style";
import themeStyle from "../../style/theme.style";

export default function TaskDeadline() {
  return (
      <View style={style.card}>
        <Text style={style.title}>DEADLINE</Text>
        <Text>Estimee</Text>
        <Text>Time Spent</Text>
        <Text>Percentage</Text>
      </View>
  );
}

const style = StyleSheet.create({
  card: {
    ...card,
  },
  title: {
    ...textUppercase,
    fontSize: themeStyle.FONT_SIZE_M,
    color: themeStyle.GREEN,
  },
});
