import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={{ width: 300, height: 70 }}
          source={require("../assets/logo.png")}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="email@company.com"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="password"
        />
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate("Tasks")}
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
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
    </View>
  );
}
const iconStar = {
  width: 30,
  height: 30,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imgContainer: {
    marginBottom: 40,
  },
  inputView: {
    width: 250,
    borderColor: "black",
    borderWidth: 1,
    height: 45,
    alignItems: "center",
    marginBottom: 20,
  },
  TextInput: {
    flex: 1,
    padding: 10,
  },
  loginBtn: {
    width: 250,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    borderColor: "black",
    borderWidth: 1,
  },
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    width: 300,
    justifyContent: "space-between",
    position: "absolute",
    bottom: 100,
  },
  iconStar: {
    ...iconStar,
    marginTop: 40,
  },
  iconStarCenter: {
    ...iconStar,
  },
});
