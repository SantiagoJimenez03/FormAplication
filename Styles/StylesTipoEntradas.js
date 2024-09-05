import { StyleSheet, Dimensions } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

// const colorPrincipal="#186050";
// const colorSecundario="#165446";
const colorPrincipal="#2595e2"
const colorSecundario="#b7e1f9"

export const styles = StyleSheet.create({
  TextoGrids: {
    fontSize: 0.018 * screenHeight,
    marginBottom: "2%",
    marginHorizontal: "3%",
    //color: "#fff",
    color: "#022d4b",
  },

  TextoError: {
    fontSize: 0.017 * screenHeight,
    marginVertical: "1%",
    marginHorizontal: "3%",
    fontWeight: "bold",
    //color: "#f9e79f",
    color: "red",
  },

  TextoGrids_2: {
    fontSize: 0.018 * screenHeight,
    marginTop: "2%",
    marginBottom: "1%",
    marginHorizontal: "3%",
    //color: "#fff",
    color: "#022d4b",
  },

  box_1: {
    width: "99.5%",
    marginHorizontal: "auto",
    marginTop: "1.5%",
    borderRadius: 20,
    padding: "1%",
    backgroundColor: colorSecundario,
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.25, 
    shadowRadius: 3.84, 
    elevation: 1,
  },

  box_texto_Cat1: {
    marginTop: "2%",
    borderRadius: 20,
    padding: "1%",
    backgroundColor: colorSecundario,
  },

  Texto: {
    paddingHorizontal: "4%",
    color: "white",
    backgroundColor: colorPrincipal,
    paddingVertical: "1%",
    marginHorizontal: "2%",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.25, 
    shadowRadius: 3.84, 
    elevation: 5,
  },

  label: {
    marginBottom: 5,
  },

  buttonSave: {
    width: 0.8 * screenWidth,
    height: 0.09 * screenWidth,
    marginTop: "5%",
    borderRadius: 20,
    paddingVertical: "1.5%",
    marginHorizontal: "auto",
    justifyContent: "center",
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.25, 
    shadowRadius: 3.84, 
    elevation: 8,
  },
  buttonCancel: {
    width: 0.8 * screenWidth,
    height: 0.09 * screenWidth,
    marginTop: "2%",
    borderRadius: 20,
    paddingVertical: "1.5%",
    marginHorizontal: "auto",
    justifyContent: "center",
    marginBottom: "10%",
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.25, 
    shadowRadius: 3.84, 
    elevation: 8,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 0.019 * screenHeight, // Tamaño del texto del título
    fontWeight: "bold", // Estilo en negrita para el título
  },
});
