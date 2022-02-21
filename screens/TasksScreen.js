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
    project: "Project 1",
    titleTask: "Refaire le front-end",
    author: "Patrik",
    status: "done",
  },
  {
    id: 3,
    project: "Project 2",
    titleTask: "Cleaner les logos",
    author: "Sponge Bob",
    status: "pending",
  },
];

const Item = ({ project, titleTask, author, status }) => (
  <View style={card.container}>
    <View style={card.card}>
      <Text style={card.project}>{project}</Text>
      <View style={card.titleBox}>
        {status === " pending" ? (
          // <Image
          //   style={{ width: 30, height: 30 }}
          //   source={require("../assets/star_yellow.png")}
          // />
          <Text>test</Text>
        ) : (
          <>
            <Text>{status}</Text>
            {/* <Image
                style={{ width: 30, height: 30 }}
               source={require("../assets/star_yellow.png")}
              /> */}
          </>
        )}
        <Text style={card.title}>{titleTask}</Text>
      </View>
      <View style={card.authorBox}>
        <Text style={card.author}>{author}</Text>
      </View>
    </View>
  </View>
);
export default function Task({navigation}) {
  const renderItem = ({ item }) => (
    <Item
      project={item.project}
      titleTask={item.titleTask}
      author={item.author}
      status={item.status}
    />
  );
  return (
    <SafeAreaView>
      <Logo onPress={() => navigation.navigate("Login")}/>
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