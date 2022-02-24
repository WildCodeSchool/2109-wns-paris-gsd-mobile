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
export default function TaskDescription({ data }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{data.title}</Text>
      <View style={styles.detailsBox}>
        <Text style={styles.description}>
          {data.description}
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
