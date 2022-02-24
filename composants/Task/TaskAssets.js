import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  titleCard,
  textDescription,
  cardDetail,
  inputSelect,
  marginAutoRL,
  marginAutoTB,
} from "../../style/common.style";
import Ionicons from "@expo/vector-icons/Ionicons";

import theme from "../../style/theme.style";
export default function TaskAssets() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Assets</Text>
      <View style={styles.detailsBox}>
        <Text style={styles.description}>Capture d’écran du 13/12/2002</Text>
        <Text style={styles.description}>Capture d’écran du 13/12/2002</Text>
      </View>
      
      <TouchableOpacity>
        <View style={styles.button}>
          <Ionicons name="add-circle-outline" size={30} style={styles.icon} />
        </View>
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
  detailsBox:{
    marginBottom: 10,
  },
  description: {
    ...textDescription,
    textAlign: "left",
    fontWeight: theme.FONT_WEIGHT_BOLD,
  },
  button: {
    ...inputSelect,
    ...marginAutoRL,
    width: 118,
  },
icon: {
  ...marginAutoRL,
  ...marginAutoTB
}
});
