import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Dimensions,
} from "react-native";
import PropTypes from 'prop-types';

const { width: screenWidth,  height: screenHeight} = Dimensions.get('window');



export function Mes({MesSeleccionado}) {
  const Meses = [
    { id: "1", mes: "Enero" },
    { id: "2", mes: "Febrero" },
    { id: "3", mes: "Marzo" },
    { id: "4", mes: "Abril" },
    { id: "5", mes: "Mayo" },
    { id: "6", mes: "Junio" },
    { id: "7", mes: "Julio" },
    { id: "8", mes: "Agosto" },
    { id: "9", mes: "Septiembre" },
    { id: "10", mes: "Octubre" },
    { id: "11", mes: "Noviembre" },
    { id: "12", mes: "Diciembre" },
  ];

  const [Mes, setMes] = useState("Mes");
  const [modalVisible, setModal] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.Button} onPress={() => setModal(true)}>
        <Text style={styles.ButtonText}>{Mes}</Text>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModal(false)}>
        <View style={styles.modalOverlay}>
          <View style={{ padding: 50 }}>
            <FlatList
              data={Meses}
              keyExtractor={(item) => item.mes}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.Option}
                  onPress={() => {
                    setMes(item.mes);
                    setModal(false);
                    MesSeleccionado(item.mes);
                  }}>
                  <Text style={styles.TextData}>{item.mes}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

export function Dia({mesSeleccionado}) {

  const Meses = [
    { mes: "Enero", N: 31 },
    { mes: "Febrero", N: 28 },
    { mes: "Marzo", N: 31 },
    { mes: "Abril", N: 30 },
    { mes: "Mayo", N: 31 },
    { mes: "Junio", N: 30 },
    { mes: "Julio", N: 31 },
    { mes: "Agosto", N: 31 },
    { mes: "Septiembre", N: 30 },
    { mes: "Octubre", N: 31 },
    { mes: "Noviembre", N: 30 },
    { mes: "Diciembre", N: 31 },
  ];

  const ObjetoMes = Meses.find((item2) => item2.mes === mesSeleccionado);
  const Ndias = ObjetoMes.N;

  const Dias = Array.from({length:Ndias}, (_, i) => ({
    id: String(i + 1),
    dia: String(i + 1),
  }));

  const [Dia, setDia] = useState("Dia");
  const [modalVisible, setModal] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.Button} onPress={() => setModal(true)}>
        <Text style={styles.ButtonText}>{Dia}</Text>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModal(false)}>
        <View style={styles.modalOverlay}>
          <View style={{ padding: 50 }}>
            <FlatList
              data={Dias}
              keyExtractor={(item) => item.dia}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.Option}
                  onPress={() => {
                    setDia(item.dia);
                    setModal(false);
                  }}>
                  <Text style={styles.TextData}>{item.dia}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

Mes.propTypes = {
  MesSeleccionado: PropTypes.string.isRequired,
}

Dia.propTypes = {
  mesSeleccionado: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // shadowColor: "#000", 
    // shadowOffset: { width: 0, height: 2 }, 
    // shadowOpacity: 0.25, 
    // shadowRadius: 3.84, 
    // elevation: 8,
  },
  Button: {
    flex: 1,
    padding: 8,
    borderRadius: 10,
    backgroundColor: "transparent",
  },
  ButtonText: {
    marginVertical: "auto",
    //color: "#022d4b",
    color: "#fff",
    textAlign: "center",
  },

  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#186050ec",
    backgroundColor: "#8ecef1",
  },

  Option: {
    marginVertical: 5,
    paddingVertical: 5,
    //backgroundColor: "#165345",
    backgroundColor: "#142ab5",
    borderRadius: 10,
  },
  TextData: {
    color: "white",
    //color: "#142ab5",
    letterSpacing: 1,
    paddingHorizontal: 10,
    marginHorizontal: "auto",
    fontSize: 0.018*screenHeight,
  },
});
