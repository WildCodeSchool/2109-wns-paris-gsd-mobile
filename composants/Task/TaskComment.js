import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

import {
  titleCard,
  textDescription,
  cardDetail,
  inputSelect,
  marginAutoRL,
  marginAutoTB,
  containerFlexRow,
  card,
} from "../../style/common.style";
import Ionicons from "@expo/vector-icons/Ionicons";

import theme from "../../style/theme.style";
export default function TaskComment() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>COMMENTS</Text>

      <View style={styles.detailsBox}>
        <View style={styles.displayComments}>
          <Ionicons name="person-circle-outline" size={40} />
          <Text style={styles.profileComment}>Micheline - project manager</Text>
        </View>
        <Text style={styles.comment}>Tu peux te depecher stp ?</Text>
        <Text style={styles.date}>13/12/2002</Text>
      </View>
      <View style={styles.textAreaContainer}>
        <TextInput
          style={styles.textArea}
          underlineColorAndroid="transparent"
          placeholder="Type something"
          placeholderTextColor="grey"
          numberOfLines={10}
          multiline={true}
        />
      </View>

      <TouchableOpacity>
        <View style={styles.button}>
          <Ionicons name="arrow-redo-outline" size={30} style={styles.icon} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    ...cardDetail,
    paddingLeft: 25,
    paddingRight: 25,
  },
  title: {
    ...titleCard,
    color: theme.PURPLE,
  },
  detailsBox: {
    marginBottom: 20,
  },
  displayComments: {
    ...containerFlexRow,
  },
  profileComment: {
    ...textDescription,
    ...marginAutoTB,
    textAlign: "left",
    fontWeight: theme.FONT_WEIGHT_BOLD,
  },
  comment: {
    ...textDescription,
    textAlign: "right",
  },
  date: {
    fontWeight: theme.FONT_WEIGHT_BOLD,
    fontSize: theme.FONT_SIZE_XXS,
    textAlign: "right",
  },
  button: {
    ...inputSelect,
    marginLeft: "auto",
  },
  icon: {
    ...marginAutoRL,
    ...marginAutoTB,
  },
  textAreaContainer: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 4,
    padding: 10,
  },
  textArea: {
    height: 150,
  },
});
