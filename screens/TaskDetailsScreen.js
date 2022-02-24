import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, View, Text } from "react-native";
import Logo from "../composants/Logo";
import { container } from "../style/common.style";
import TaskNavigation from "../composants/task/TaskNavigation";
import TaskDeadline from "../composants/task/TaskDeadline";
import TaskDescription from "../composants/task/TaskDescription";
import TaskStatus from "../composants/task/TaskStatus";
import TaskAssignee from "../composants/task/TaskAssignee";
import TaskAssets from "../composants/task/TaskAssets";
import { useQuery } from "@apollo/client";
import { GET_TASK_BY_ID } from "../graphql/Queries";
export default function TaskDetailsScreen({ route, navigation }) {

  const variables = {
    data: {
      taskId: route.params.id
    }
  }

  const { loading, data, error } = useQuery(GET_TASK_BY_ID, { variables })

  if (loading) return <Text>Loading...</Text>

  if (error) return <Text>Error</Text>


  return (
    <SafeAreaView style={styles.container}>
      <Logo onPress={() => navigation.navigate("Login")} />
      <ScrollView style={styles.card}>
        <TaskNavigation navigation={navigation} title={data.getTaskById.project.name} />

        <View style={styles.box}>
          <TaskDescription data={data.getTaskById} />
        </View>
        <View style={styles.box}>
          <TaskDeadline data={data.getTaskById} />
          <TaskAssignee />
          <TaskStatus />
          <TaskAssets />
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
