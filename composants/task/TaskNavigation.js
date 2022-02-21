import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function TaskNavigation({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => navigation.navigate("Tasks")}
        style={styles.iconArrowBackBox}
        underlayColor="none"
      >
        <View style={styles.iconArrowBack}>
          <Ionicons name={"arrow-back-circle-outline"} size={35} />
        </View>
      </TouchableHighlight>
      <View style={styles.projectNav}>
        <Text style={styles.titleProject}>Project</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  projectNav: {
    width: 300,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    backgroundColor: "#EA3358",
    marginRight: 0,
  },
  titleProject: {
    color: "white",
    padding: 15,
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    textShadowColor: "black",
    textShadowRadius: -1,
    textShadowOffset: { width: -1, height: 2 },
  },
  iconArrowBackBox: {
    marginRight: "auto",
    marginLeft: "auto",
  },
  iconArrowBack: {
    marginTop: "auto",
    marginBottom: "auto",
  },
});
