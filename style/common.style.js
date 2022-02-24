import theme from "./theme.style";
import { StatusBar } from "react-native";

export const container = {
  flex: 1,
  paddingTop: StatusBar.currentHeight,
  marginHorizontal: 16,
};
export const containerFlexCenter = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
};
export const containerFlexRow = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
};
export const containerLogo = {
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 40,
};
export const card = {
  borderRadius: 4,
  borderBottomWidth: 3,
  borderLeftWidth: 3,
  borderTopWidth: 1,
  borderRightWidth: 1,
  marginVertical: 8,
};
export const cardDetail = {
  ...card,
  padding: 35,
};
export const headingText = {
  fontSize: theme.FONT_SIZE_M,
  alignSelf: "flex-start",
  color: theme.GREEN,
  padding: 10,
  fontWeight: theme.FONT_WEIGHT_BOLD,
};
export const textInput = {
  color: theme.LIGHT_BLUE,
  backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
  //   alignSelf: "stretch",
};
export const inputView = {
  width: 250,
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  borderColor: "black",
  borderWidth: 1,
  marginBottom: 20,
};
export const inputSelect = {
  ...card,
  width: 100,
  height: 60,
  textAlign: "center",
};
export const textUppercase = {
  fontWeight: "bold",
  textTransform: "uppercase",
  textAlign: "center",
  fontFamily: theme.FONT_FAMILY,
  fontSize: theme.FONT_SIZE_M,
};
export const textDescription = {
  textAlign: "center",
  fontSize: theme.FONT_SIZE_XS,
  marginBottom: 15,
  marginTop: 5,
};
export const titleCard = {
  ...textUppercase,
  textAlign: "left",
  marginBottom: 20,
};
export const marginAutoRL = {
  marginRight: "auto",
  marginLeft: "auto",
};
export const marginAutoTB = {
  marginTop: "auto",
  marginBottom: "auto",
};
export const iconStar = {
  width: 30,
  height: 30,
};
export const buttonFilter = {
  ...card,
  padding: 15,
  width: 170,
};
export const textButton = {
  ...textUppercase,
  fontSize: theme.FONT_SIZE_S,
  // textShadowColor: "transparent",
};
