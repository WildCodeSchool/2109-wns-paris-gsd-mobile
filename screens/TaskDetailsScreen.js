import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Icon,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Logo from "../composants/Logo";

import TaskNavigation from "../composants/task/TaskNavigation";
export default function TaskDetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Logo></Logo>
      <TaskNavigation navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginVertical: 40,
  },
});
