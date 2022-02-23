import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, View } from "react-native";
import Logo from "../composants/Logo";
import { container } from "../style/common.style";
import TaskNavigation from "../composants/task/TaskNavigation";
import TaskDeadline from "../composants/task/TaskDeadline";
export default function TaskDetailsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Logo onPress={() => navigation.navigate("Login")} />
      <ScrollView style={styles.card}>
        <TaskNavigation navigation={navigation} />
        <View style={styles.box}>
          <TaskDeadline></TaskDeadline>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    ...container,
  },
});
