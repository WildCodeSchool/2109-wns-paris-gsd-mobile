import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useLazyQuery } from "@apollo/client";
import * as SecureStore from "expo-secure-store";

import { containerFlexCenter, inputView } from "../style/common.style";
import LoginIcons from "../composants/LoginIcons";
import { LOGIN_USER } from "../graphql/Queries";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const [loginUser, { loading, data, error }] = useLazyQuery(LOGIN_USER);

  async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
  }

  useEffect(() => {
    if (loading) {
      console.log("here");
      // TODO un composant LOADING ?
    } else if (data) {
      // console.log(data);
      // setEmail(data.getTasks);
    }
  }, [data]);

  const handleSubmit = async () => {
    loginUser({ variables: { data: { username, password } } })
      .then(async (res) => {
        // console.log(res);
        await save("token", res.data.loginUser.token);
        navigation.navigate("Tasks");

        // login(res.data.loginUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
          style={styles.textInput}
          placeholder="email@company.com"
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          secureTextEntry={true}
          placeholder="password"
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={
          async () => {
            await handleSubmit();
          }
          // navigation.navigate("Tasks")
        }
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
