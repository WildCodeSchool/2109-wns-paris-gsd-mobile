import React from "react";
import { StyleSheet, View, Image } from "react-native";
import {
  containerFlexRow,
  marginAutoRL,
  iconStar,
} from "../style/common.style";

export default function LoginIcons() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.icon}
        source={require("../assets/star_yellow.png")}
      />
      <Image
        style={styles.iconCenter}
        source={require("../assets/star_red.png")}
      />
      <Image style={styles.icon} source={require("../assets/star_blue.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...containerFlexRow,
    width: 300,
    position: "absolute",
    bottom: 90,
    ...marginAutoRL,
  },
  icon: {
    ...iconStar,
    marginTop: 40,
  },
  iconCenter: {
    ...iconStar,
  },
});
