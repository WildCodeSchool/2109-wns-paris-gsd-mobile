import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import {
  cardDetail,
  inputSelect,
  textUppercase,
  titleCard,
  textDescription,
  containerFlexRow,
  card,
  textButton,
} from "../../style/common.style";
import theme from "../../style/theme.style";
import TasksSelect from "../tasks/TasksSelect";
const percentage = ["10%", "20%", "50%", "100%"];
export default function TaskStatus() {
  return (
    <View style={styles.card}>
      <View style={styles.detailsBox}>
        <Text style={styles.title}>Status</Text>
        <TasksSelect
          data={[]}
          buttonStyle={[styles.button, styles.buttonSelect]}
          defaultButtonText=""
          buttonTextStyle={styles.text}
        />
      </View>
      <View style={styles.detailsBox}>
        <Text style={[styles.title, styles.titleBlue]}>%</Text>
        <TasksSelect data={[]} buttonStyle={styles.button} defaultButtonText="%" />
      </View>
      <View style={styles.detailsBox}>
        <Text style={[styles.title, styles.titleBlue]}>Time</Text>
        <TextInput style={styles.button} placeholder="" />
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
    color: theme.PINK,
    marginTop: "auto",
    marginBottom: "auto",
  },
  description: {
    ...textDescription,
    textAlign: "left",
  },
  detailsBox: {
    ...containerFlexRow,
  },
  button: {
    ...inputSelect,
  },
  buttonSelect: {
    ...inputSelect,
    width: 120,
  },
  text: {
    ...textDescription,
    marginTop: "auto",
    marginBottom: "auto",
  },
  titleBlue: {
    color: theme.BLUE
  }
});
