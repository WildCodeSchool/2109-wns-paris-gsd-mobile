import React, { useEffect, useState } from "react";
import format from "date-fns/format";
import { fr } from "date-fns/locale";
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
import * as SecureStore from "expo-secure-store";

import theme from "../style/theme.style";
import { useLazyQuery } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { GET_TASKS } from "../graphql/Queries";

const Item = ({
  taskId,
  project,
  taskTitle,
  author,
  status,
  navigation,
  advancement,
  endingTime,
}) => {
  const parsingDate = format(new Date(+endingTime), "P", { locale: fr });

  return (
    <ScrollView style={styles.card}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Task Details", { id: taskId })}
      >
        <TasksDetailsBox
          project={project}
          taskTitle={taskTitle}
          author={author}
          status={status}
        />
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
};

export default function TasksScreen({ navigation }) {
  const [tasks, setTasks] = useState([]);
  const [token, setToken] = useState();

  const [getTasks, { loading, data, error }] = useLazyQuery(GET_TASKS);

  useEffect(() => {
    if (loading) {
      console.log("no data");
      // TODO un composant LOADING ?
    } else if (data) {
      setTasks(data.getTasks);
    } else if (error) {
      console.log(error);
    }
  }, [data, error]);

  useEffect(() => {
    SecureStore.getItemAsync("token").then((res) => {
      setToken(res);
    });

    getTasks();
  }, []);

  const renderItem = ({ item }) => (
    <Item
      taskId={item.id}
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
        data={["prout", "prout"]}
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
    fontSize: 20,
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
