import React from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
  SafeAreaView,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import theme from "../../style/theme.style";
import {
  container,
  cardDetail,
  titleCard,
  containerFlexRow,
  textUppercase,
  textDescription,
} from "../../style/common.style";
export default function TaskDescription() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Cleaner les logs</Text>
      <View style={styles.detailsBox}>
        <Text style={styles.description}>Salut Valentaing,</Text>
        <Text style={styles.description}>
          Est-ce que tu peux clenaer les logs de merde qui trainent
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    ...cardDetail,
  },
  title: {
    ...titleCard,
    color: theme.YELLOW,
  },
  description: {
    ...textDescription,
    textAlign: "left",
  },
});
