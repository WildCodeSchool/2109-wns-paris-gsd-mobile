import React, { useEffect, useState } from "react";
import format from 'date-fns/format'
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
  buttonFilter,
  textButton,
} from "../style/common.style";
import Logo from "../composants/Logo";
import TasksDetailsBox from "../composants/tasks/TasksDetailsBox";
import TasksFilterButton from "../composants/tasks/TasksFilterButton";
import TasksSelect from "../composants/tasks/TasksSelect";

import theme from "../style/theme.style";
import { useQuery } from "@apollo/client";
import { GET_TASKS } from "../graphql/Queries";


const Item = ({ project, taskTitle, author, status, navigation, advancement, endingTime }) => {
  const parsingDate = format(new Date(+endingTime), 'P')

  return (
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
            <Text style={(styles.title, styles.progress)}>{advancement}%</Text>
          </View>
          <View style={styles.boxTitle}>
            <Text style={(styles.title, styles.date)}>{parsingDate}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}


export default function TasksScreen({ navigation }) {

  const [tasks, setTasks] = useState()

  const { data, error } = useQuery(GET_TASKS)

  console.log(data)
  useEffect(() => {
    setTasks(data.getTasks)
  }, []);

  const renderItem = ({ item }) => (
    <Item
      project={item.project.name}
      taskTitle={item.title}
      author={item.taskCreator.username}
      status={item.status}
      advancement={item.advancement}
      endingTime={item.ending_time}
      navigation={navigation}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Logo onPress={() => navigation.navigate("Login")} />
      <TasksSelect
        buttonStyle={styles.button}
        buttonTextStyle={styles.text}
        defaultButtonText="All Projects"
      />
      <TasksFilterButton />
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
  button: {
    ...buttonFilter,
    width: "100%",
    padding: 10,
  },
  text: {
    ...textButton,
  },
});
