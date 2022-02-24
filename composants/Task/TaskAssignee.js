import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  inputSelect,
  titleCard,
  textDescription,
  containerFlexRow,
  marginAutoTB,
} from "../../style/common.style";
import theme from "../../style/theme.style";
import TasksSelect from "../tasks/TasksSelect";
export default function TaskAssignee() {
  return (
    <View style={styles.detailsBox}>
      <Text style={styles.title}>Assignee</Text>
      <TasksSelect
        data={[]}
        buttonStyle={styles.buttonSelect}
        defaultButtonText="test"
        buttonTextStyle={styles.text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  detailsBox: {
    ...containerFlexRow,
  },
  title: {
    ...titleCard,
    ...marginAutoTB,
    color: theme.LIGHT_BLUE,
  },
  buttonSelect: {
    ...inputSelect,
    width: 140,
  },
  text: {
    ...textDescription,
    ...marginAutoTB,
  },
});
