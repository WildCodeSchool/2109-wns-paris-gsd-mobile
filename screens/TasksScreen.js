import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  FlatList,
  SafeAreaView,
  SectionList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { textDecorationColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
// import {tasks} from "../data/tasks";
import Logo from "../composants/Logo";

const tasks = [
  {
    id: 1,
    project: "Project 1",
    titleTask: "Cleaner les logos",
    author: "Sponge Bob",
    status: "pending",
    icon: {
      uri: "../assets/star_yellow.png",
    },
  },
  {
    id: 2,
    project: "Project 2",
    titleTask: "Refaire le front-end",
    author: "Patrik",
    status: "done",
  },
  {
    id: 3,
    project: "Project 3",
    titleTask: "Cleaner les logos",
    author: "Sponge Bob",
    status: "pending",
  },
  {
    id: 4,
    project: "Project 4",
    titleTask: "Cleaner les logos",
    author: "Sponge Bob",
    status: "pending",
  },
  {
    id: 5,
    project: "Project 5",
    titleTask: "Cleaner les logos",
    author: "Sponge Bob",
    status: "pending",
  },
];

const Item = ({ project, titleTask, author, status, navigation }) => (
  <SafeAreaView style={card.container}>
    <ScrollView style={card.card}>
      <TouchableOpacity onPress={() => navigation.navigate("Task Details")}>
        <Text style={card.project}>{project}</Text>
      </TouchableOpacity>
      <View style={card.titleBox}>
        {status === " pending" ? (
          <Text>test</Text>
        ) : (
          <>
            <Text>{status}</Text>
          </>
        )}
        <Text style={card.title}>{titleTask}</Text>
      </View>
      <View style={card.authorBox}>
        <Text style={card.author}>{author}</Text>
      </View>
    </ScrollView>
  </SafeAreaView>
);
export default function Task({ navigation }) {
  const renderItem = ({ item }) => (
    <Item
      project={item.project}
      titleTask={item.titleTask}
      author={item.author}
      status={item.status}
      navigation={navigation}
    />
  );
  return (
    <SafeAreaView>
      <Logo onPress={() => navigation.navigate("Login")} />
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
const text = {
  fontWeight: "bold",
  textTransform: "uppercase",
  textShadowColor: "black",
  textShadowRadius: -1,
  textShadowOffset: { width: -1, height: 2 },
};
const box = {
  width: 300,
  marginLeft: "auto",
  marginRight: "auto",
};
const card = StyleSheet.create({
  header: {
    backgroundColor: "red",
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  card: {
    borderRadius: 4,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderTopWidth: 1,
    borderRightWidth: 1,
    marginVertical: 8,
  },
  project: {
    ...text,
    backgroundColor: "#EA3358",
    color: "white",
    padding: 15,
    fontSize: 20,
    borderRadius: 4,
  },
  titleBox: {
    ...box,
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
  },
  title: {
    ...text,
    fontSize: 25,
    color: "#F4BF42",
    paddingLeft: 20,
  },
  authorBox: {
    ...box,
    flex: 1,
    justifyContent: "flex-end",
    marginTop: 15,
    marginBottom: 5,
  },
  author: {
    ...text,
    fontSize: 15,
    color: "#5DCFFA",
    textAlign: "right",
  },
});
