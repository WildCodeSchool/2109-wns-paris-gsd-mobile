import React from "react";
import { StyleSheet, View } from "react-native";
import {
  containerFlexRow,
  buttonFilter,
  textButton,
} from "../../style/common.style";
import Ionicons from "@expo/vector-icons/Ionicons";

import SelectDropdown from "react-native-select-dropdown";
const projects = ["Project 1", "New Project", "Project FB", "Project 3"];
export default function TasksSelect() {
  return (
    <View style={styles.container}>
      <SelectDropdown
        data={projects}
        onSelect={(selectedItem, index) => {
          //   console.log(selectedItem, index);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item;
        }}
        defaultButtonText="All Projects"
        renderDropdownIcon={(isOpened) => {
          return (
            <Ionicons
              name={isOpened ? "caret-up-outline" : "caret-down-outline"}
              color={"#444"}
              size={18}
            />
          );
        }}
        buttonStyle={styles.button}
        buttonTextStyle={styles.text}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    ...containerFlexRow,
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
