import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  container,
  card,
  containerFlexRow,
  textUppercase,
  textDescription,
} from "../../style/common.style";
import theme from "../../style/theme.style";

export default function TasksDetailsBox({
  project,
  taskTitle,
  author,
  status,
}) {
  return (
    <View style={styles.box}>
      <View style={styles.detailsBox}>
        <View style={styles.boxTitle}>
          <Text style={(styles.title, styles.task)}>Task</Text>
        </View>
        <View style={styles.boxTitle}>
          <Text style={styles.description}>{taskTitle}</Text>
        </View>
      </View>
      <View style={styles.detailsBox}>
        <View style={styles.boxTitle}>
          <Text style={(styles.title, styles.project)}>Project</Text>
        </View>
        <View style={styles.boxTitle}>
          <Text style={styles.description}>{project}</Text>
        </View>
      </View>
      <View style={styles.detailsBox}>
        <View style={styles.boxTitle}>
          <Text style={(styles.title, styles.status)}>Status</Text>
        </View>
        <View style={styles.boxTitle}>
          <Text style={styles.description}>{status}</Text>
        </View>
      </View>
      <View style={styles.detailsBox}>
        <View style={styles.boxTitle}>
          <Text style={(styles.title, styles.author)}>Assignee</Text>
        </View>
        <View style={styles.boxTitle}>
          <Text style={styles.description}>{author}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      ...container,
    },
    card: {
      ...card,
    },
    detailsBox: {
      ...containerFlexRow,
    },
    box: {
      padding: 22,
      paddingBottom: 0,
    },
    description: {
      ...textDescription,
    },
    boxTitle: {
      width: "50%",
      marginBottom: 22,
    },
    title: {
      fontSize: theme.FONT_SIZE_M,
    },
    task: {
      color: theme.YELLOW,
      ...textUppercase,
    },
    project: {
      color: theme.RED,
      ...textUppercase,
    },
    status: {
      color: theme.PINK,
      ...textUppercase,
    },
    author: {
      color: theme.LIGHT_BLUE,
      ...textUppercase,
    }
  });