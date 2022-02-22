import React from "react";
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

const tasks = [
  {
    id: 1,
    project: "Project 1",
    taskTitle: "Cleaner les logos",
    author: "Sponge Bob",
    status: "pending",
    icon: {
      uri: "../assets/star_yellow.png",
    },
  },
  {
    id: 2,
    project: "Project 2",
    taskTitle: "Refaire le front-end",
    author: "Patrik",
    status: "done",
  },
  {
    id: 3,
    project: "Project 3",
    taskTitle: "Cleaner les logos",
    author: "Sponge Bob",
    status: "pending",
  },
  {
    id: 4,
    project: "Project 4",
    taskTitle: "Cleaner les logos",
    author: "Sponge Bob",
    status: "pending",
  },
  {
    id: 5,
    project: "Project 5",
    taskTitle: "Cleaner les logos",
    author: "Sponge Bob",
    status: "pending",
  },
];

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
  const renderItem = ({ item }) => (
    <Item
      project={item.project}
      taskTitle={item.taskTitle}
      author={item.author}
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
    color: theme.SIXTH_COLOR,
    ...textUppercase,
  },
  date: {
    color: theme.FIFTH_COLOR,
    ...textUppercase,
  },
});
