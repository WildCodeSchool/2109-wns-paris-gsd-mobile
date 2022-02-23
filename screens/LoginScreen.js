import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import LoginIcons from '../composants/LoginIcons'
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
        <TextInput style={styles.TextInput} placeholder="email@company.com" />
      </View>
      <View style={styles.inputView}>
        <TextInput style={styles.TextInput} placeholder="password" />
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate("Tasks")}
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <LoginIcons/>
    </View>
  );
}

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
});
