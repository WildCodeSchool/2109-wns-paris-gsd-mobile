import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
export default function LoginIcons() {
  return (
    <View style={styles.iconsContainer}>
      <Image
        style={styles.iconStar}
        source={require("../assets/star_yellow.png")}
      />
      <Image
        style={styles.iconStarCenter}
        source={require("../assets/star_red.png")}
      />
      <Image
        style={styles.iconStar}
        source={require("../assets/star_pink.png")}
      />
    </View>
  );
}
const iconStar = {
  width: 30,
  height: 30,
};
const styles = StyleSheet.create({
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    width: 300,
    justifyContent: "space-between",
    marginTop: 20,  
  },
  iconStar: {
    ...iconStar,
    marginTop: 40,
  },
  iconStarCenter: {
    ...iconStar,
  },
});
