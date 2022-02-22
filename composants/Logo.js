import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { containerLogo } from "../style/common.style";

export default function Logo({ onPress }) {
  return (
    <View style={styles.container}>
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
  container: {
    ...containerLogo,
  },
});
