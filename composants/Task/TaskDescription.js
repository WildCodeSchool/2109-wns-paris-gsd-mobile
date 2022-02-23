import React from 'react';
import { StyleSheet, ScrollView, Text, StatusBar, SafeAreaView, View, FlatList, Image, TouchableOpacity } from "react-native";

export default function TaskDescription(){

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
              <View style={styles.card}>
                  <Text style={styles.title}>Cleaner les logs</Text>
                  <Text style={styles.text}>Salut Valentaing, Est-ce que tu peux clenaer les logs de merde qui trainent</Text>
              </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
      marginHorizontal: 20,
    },
    card: {
      borderColor: 'black',
      borderRadius: 4,
      borderBottomWidth: 3,
      borderLeftWidth: 3,
      borderTopWidth: 1,
      borderRightWidth: 1,
      marginVertical: 8,
      padding: 20,
    },
    title: {
    fontSize: 25,
    color: '#F4BF42',
    textTransform: "uppercase",
    fontWeight: "bold",
    letterSpacing: 1.5,
    paddingBottom: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 3, height: 1},
    textShadowRadius: 2,
  },
    text: {
      fontSize: 16,
    },
  });
  
