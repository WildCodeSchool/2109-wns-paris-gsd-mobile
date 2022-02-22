import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { containerFlexCenter, inputView } from "../style/common.style";
import LoginIcons from "../composants/LoginIcons";
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
        <TextInput style={styles.textInput} placeholder="email@company.com" />
      </View>
      <View style={styles.inputView}>
        <TextInput style={styles.textInput} placeholder="password" />
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate("Tasks")}
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <LoginIcons />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...containerFlexCenter,
  },
  imgContainer: {
    marginBottom: 40,
  },
  inputView: {
    ...inputView,
    height: 45,
  },
  loginBtn: {
    ...inputView,
    height: 50,
  },
});
