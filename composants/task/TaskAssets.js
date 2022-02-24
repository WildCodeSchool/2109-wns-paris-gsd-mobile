import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  titleCard,
  textDescription,
  cardDetail,
} from "../../style/common.style";
import Ionicons from "@expo/vector-icons/Ionicons";

import theme from "../../style/theme.style";
export default function TaskAssets() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Assignee</Text>
      <View style={styles.detailsBox}>
        <Text style={styles.description}>Capture d’écran du 13/12/2002</Text>
        <Text style={styles.description}>Capture d’écran du 13/12/2002</Text>
      </View>
      <TouchableOpacity >
          
        <Ionicons name="add-circle-outline" size={30} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    ...cardDetail,
  },
  title: {
    ...titleCard,
    color: theme.ORANGE,
  },
  description: {
    ...textDescription,
    textAlign: "left",
    fontWeight: theme.FONT_WEIGHT_MEDIUM,
  },
});
