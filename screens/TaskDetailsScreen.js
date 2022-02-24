import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, View } from "react-native";
import Logo from "../composants/Logo";
import { container } from "../style/common.style";
import TaskNavigation from "../composants/task/TaskNavigation";
import TaskDeadline from "../composants/task/TaskDeadline";
import TaskDescription from "../composants/task/TaskDescription";
import TaskStatus from "../composants/task/TaskStatus";
import TaskAssignee from "../composants/task/TaskAssignee";
import TaskAssets from "../composants/task/TaskAssets";
export default function TaskDetailsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Logo onPress={() => navigation.navigate("Login")} />
      <ScrollView style={styles.card}>
        <TaskNavigation navigation={navigation} />

        <View style={styles.box}>
          <TaskDescription />
        </View>
        <View style={styles.box}>
          <TaskDeadline />
          <TaskAssignee/>
          <TaskStatus />
          <TaskAssets/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    ...container,
  },
  card: {
    padding: 20,
  },
});
