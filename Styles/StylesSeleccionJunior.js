
import {
  StyleSheet,
  Dimensions,
} from "react-native";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export const styles = StyleSheet.create({
  Opciones: {
    marginLeft: "3%",
  },

  seleccion: {
    flexDirection: "row",
    marginVertical: "0.5%",
    alignItems: "center",
  },

  checkBox: {
    width: 0.06 * screenWidth,
    height: 0.06 * screenWidth,
    borderWidth: 2,
    borderColor: "#142ab5",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "1%",
    borderRadius: 6,
  },

  textSeleccion: {
    //textTransform: "capitalize",
    fontSize: 0.018 * screenHeight,
    color: "#022d4b",
    marginLeft: "3%",
    marginRight: "6%",
    marginHorizontal: "auto",
  },
});