import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
export default function Logo({ onPress }) {
  return (
    <View style={styles.imgContainer}>
      <TouchableOpacity onPress={onPress}>
        <Image
          style={{ width: 300, height: 70 }}
          source={require("../assets/logo.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    marginBottom: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
