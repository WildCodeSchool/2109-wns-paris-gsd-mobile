import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  container,
  card,
  containerFlexRow,
  textUppercase,
  textDescription,
} from "../style/common.style";
import Logo from "../composants/Logo";
import TasksDetailsBox from "../composants/tasks/TasksDetailsBox";
import theme from "../style/theme.style";
import { useQuery } from "@apollo/client";
import { GET_TASKS } from "../graphql/Queries";


const Item = ({ project, taskTitle, author, status, navigation }) => (
  <ScrollView style={styles.card}>
    <TouchableOpacity onPress={() => navigation.navigate("Task Details")}>
      <TasksDetailsBox
        project={project}
        taskTitle={taskTitle}
        author={author}
        status={status}
      ></TasksDetailsBox>
      <View style={styles.detailsBox}>
        <View style={styles.boxTitle}>
          <Text style={(styles.title, styles.progress)}>55%</Text>
        </View>
        <View style={styles.boxTitle}>
          <Text style={(styles.title, styles.date)}>11/11/11</Text>
        </View>
      </View>
    </TouchableOpacity>
  </ScrollView>
);

export default function TasksScreen({ navigation }) {

  const [tasks, setTasks] = useState()

  const { data, error } = useQuery(GET_TASKS)

  useEffect(() => {
    setTasks(data.getTasks)
  }, [data]);

  const renderItem = ({ item }) => (
    <Item
      project={item.project.name}
      taskTitle={item.title}
      author={item.taskCreator.username}
      status={item.status}
      navigation={navigation}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Logo onPress={() => navigation.navigate("Login")} />
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
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
  boxTitle: {
    padding: 20,
    width: "50%",
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderColor: "black",
  },
  title: {
    fontSize: theme.FONT_SIZE_M,
  },
  progress: {
    color: theme.BLUE,
    ...textUppercase,
  },
  date: {
    color: theme.GREEN,
    ...textUppercase,
  },
});
