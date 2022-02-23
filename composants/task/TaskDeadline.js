import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  cardDetail,
  titleCard,
  textDescription,
  containerFlexRow,
} from "../../style/common.style";
import theme from "../../style/theme.style";

export default function TaskDeadline() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>DEADLINE</Text>

      <View style={styles.detailsBox}>
        <Text>Estimee</Text>
        <Text style={styles.description}>6 hours</Text>
      </View>
      <View style={styles.detailsBox}>
        <Text>Time Spent</Text>
        <Text style={styles.description}>4 hours</Text>
      </View>
      <View style={styles.detailsBox}>
        <Text>Percentage</Text>
        <Text style={styles.description}>67%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    ...cardDetail,
  },
  title: {
    ...titleCard,
    color: theme.GREEN,
  },
  description: {
    ...textDescription,
    textAlign: "left",
  },
  detailsBox: {
    ...containerFlexRow,
  },
});
