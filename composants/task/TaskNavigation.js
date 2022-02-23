import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import {margin} from '../../style/common.style'
import { textUppercase } from "../../style/common.style";
import themeStyle from "../../style/theme.style";

import Ionicons from "@expo/vector-icons/Ionicons";
export default function TaskNavigation({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => navigation.navigate("Tasks")}
        style={styles.iconArrowBackBox}
        underlayColor="none"
      >
        <View style={styles.iconArrowBack}>
          <Ionicons name={"arrow-back-circle-outline"} size={35} />
        </View>
      </TouchableHighlight>
      <Text style={styles.title}>PROCTOFRANCE</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  iconArrowBackBox: {
    ...margin,
  },
  title: {
    ...textUppercase,
    fontSize: themeStyle.FONT_SIZE_L,
    color: themeStyle.RED,
  },
});
