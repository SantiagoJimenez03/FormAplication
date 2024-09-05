import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

// const colorPrincipal="#186050";
// const colorSecundario="#165446";
const colorPrincipal="#2595e2";
const colorSecundario="#b7e1f9";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: "2%",            // Espacio adicional al final
    backgroundColor: colorPrincipal,
  },

  scrollView: {
    paddingBottom: "2%",            // Espacio adicional al final del scroll
    backgroundColor: colorPrincipal,
    marginTop: "3%",
  },

  Titulo: {
    width: "70%",
    fontSize: 0.04 * screenHeight,  // Tamaño del texto del título
    fontWeight: "bold",             // Estilo en negrita para el título
    textAlign: "center",            // Alineación centrada
    letterSpacing: 5,
    color: "white",
    marginTop: "1%",                // Espaciado vertical alrededor del título
    marginBottom: "2%",
    marginHorizontal: "auto",
    borderRadius: 20,
  },

  subTitulo: {
    width: "95%",
    fontSize: 0.015 * screenHeight,   // Tamaño del texto del título
    textAlign: "center",              // Alineación centrada
    marginTop: "0.3%",                // Espaciado vertical alrededor del título
    marginBottom: "5%",
    marginHorizontal: "auto",
    borderRadius: 20,
    backgroundColor: colorPrincipal,
    color: "#fff",
  },

  subTituloCat: {
    fontSize: 0.018 * screenHeight,
    marginBottom: "2%",
    marginHorizontal: "0.5%",
    color: "#022d4b",
    fontWeight: "bold",
  },

  TextoGrids: {
    fontSize: 0.018 * screenHeight,
    marginBottom: "2%",
    marginHorizontal: "2%",
    color: "#022d4b",
  },

  box_1: {
    width: "90%",
    marginHorizontal: "auto",
    marginTop: "4%",
    borderRadius: 20,
    padding: "2%",
    backgroundColor: colorSecundario,
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.25, 
    shadowRadius: 3.84, 
    elevation: 8,
  },
  box_fecha:{
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

  label: {
    marginBottom: "2%",
  },
  box_2: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 20,
    backgroundColor: colorSecundario,
  },
  fecha: {
    flex: 1,
    borderRadius: 12,
    backgroundColor: colorPrincipal,
    margin: 5,
    textAlign: "center",
    color: "white",
  },
});
