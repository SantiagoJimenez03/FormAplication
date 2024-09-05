import {
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Seleccion, Seleccion_4 } from "./Seleccion";
import axios from "axios";
import { styles } from "../Styles/StylesTipoEntradas";
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from "@react-native-async-storage/async-storage";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");



export const verificarReconexion = async()=>{

  try{
    const DatosAlmacenados = await AsyncStorage.getItem('DatosFormulario');
    if(DatosAlmacenados){
      Alert.alert("Reenvio","Reenviando Mierda");
      const DatosAlmacenadosObj = JSON.parse(DatosAlmacenados);
      await enviarFormulario(DatosAlmacenadosObj);
      await AsyncStorage.removeItem('DatosFormulario')
    }
    
  }catch{

  }

}

const enviarFormulario = async(DatosFormulario)=>{
  console.log(DatosFormulario);
  try {
    const response = await axios.post("http://192.168.20.28:3000/api/formulario",DatosFormulario);
    Alert.alert("Éxito", "Datos enviados correctamente");
    console.log(DatosFormulario);
  } catch (error) {
    Alert.alert("Error", "No se pudieron enviar los datos");
  }

}


const guardarDatos = async (DatosFormulario) => {
  
  try {
    const jsonValue = JSON.stringify(DatosFormulario);
    await AsyncStorage.setItem('DatosFormulario', jsonValue);
    Alert.alert('INFORMACION DE MIERDA', 'Datos almacenados');
  } catch (error) {
    Alert.alert('INFORMACION DE MIERDA', 'NO se guardo ni mierda');
  }
};

const gestionarFormulario = async (DatosFormulario) => {

  try{  
    const estado = await NetInfo.fetch();
    if (estado.isConnected){
      await enviarFormulario(DatosFormulario);
    }
    else {
      await guardarDatos(DatosFormulario);
    }
  }catch(error){
    //
  }

};

export function InputText(props) {
  const { textoTitulo, placeHolder, valor = '',campo, keyboardType } = props;
  const [Variable, setVariable] = useState("");
  const [MensajeError, setMensajeError] = useState("");

  const validacionMensaje = (texto) =>{      
    setVariable(texto);
    Variable.trim() ==="" ? setMensajeError("Campo obligatorio y no debe contener solo espacios*"):(setMensajeError(""), campo(texto));
  } 

  const validacionBlur = (valor) => {
    // Variable.trim() ==="" ? setMensajeError("Campo obligatorio y no debe contener solo espacios*"):null;    
    if(Variable.trim() ===""){
      setMensajeError("Campo obligatorio y no debe contener solo espacios*");
    }else if (valor === "N_Doc" && Variable.length<8 ){
        setMensajeError("El numero de documento debe tener al menos 8 digitos*");
    }else{
      null;
    }
  }

  return (
    <View style={styles.box_1}>
      <Text style={styles.TextoGrids}>{textoTitulo}</Text>
      <TextInput
        style={styles.Texto}
        placeholder={placeHolder}
        placeholderTextColor="#d8d9d9"
        fontSize={0.018 * screenHeight}
        onChangeText={validacionMensaje}
        onBlur={()=>validacionBlur(valor)}
        keyboardType={keyboardType}
      />
      {MensajeError ? <Text style={styles.TextoError}>{MensajeError}</Text>:null}
    </View>
  );
}

export function InputSelect({ textoTitulo,GrupResp, onChange}) {
  const [selectedOptions, setSelectedOptions] = useState([])
  const [error, setError] = useState(false);

  const handleSelectChange = (options) => {
    setSelectedOptions(options)

    if (options.length === 0) {
      setError(true)
    } else {
      setError(false)
    }

    if (onChange) {
      onChange(options.map(option => ({ label: option.label })))
    }
  }

  return (
    <View style={styles.box_1}>
      <Text style={styles.TextoGrids}>{textoTitulo}</Text>
      <Seleccion onChange={handleSelectChange} GrupResp={GrupResp}/>
      {error && <Text style={styles.TextoError}>Por favor, seleccione al menos una opción.</Text>}
    </View>
  );
}

export function InputSelectMul({ textoTitulo,GrupResp, onChange}) {
  const [selectedOptions, setSelectedOptions] = useState([])
  const [error, setError] = useState(false)

  const handleSelectionChange = (options) => {
    setSelectedOptions(options)

    if (options.length === 0) {
      setError(true)
    } else {
      setError(false)
    }

    if (onChange) {
      onChange(options.map(option => ({ label: option.label })))
    }
  }

  return (
    <View style={styles.box_1}>
      <Text style={styles.TextoGrids}>{textoTitulo}</Text>
      <Seleccion_4 onChange={handleSelectionChange} GrupResp={GrupResp} />
      {error && <Text style={styles.TextoError}>Por favor, seleccione al menos una opción.</Text>}
    </View>
  );
}

export function InputSelect_Text({onChange, textoTitulo,GrupResp,placeHolder,textoTitulo2,campo}) {
  const [selectedOptions, setSelectedOptions] = useState([])
  const [error, setError] = useState(false)

  const handleSelectionChange = (options) => {
    setSelectedOptions(options)

    if (options.length === 0) {
      setError(true)
    } else {
      setError(false)
    }

    if (onChange) {
      onChange(options.map(option => ({ label: option.label })))
      //onChange(options.map(option =>option.label).join(', '))
    }
  }

  return (
    <View style={styles.box_1}>
      <Text style={styles.TextoGrids}>{textoTitulo}</Text>
      <Seleccion_4 onChange={handleSelectionChange} GrupResp={GrupResp} />
      <Text style={styles.TextoGrids_2}>{textoTitulo2}</Text>
      <TextInput
        style={styles.Texto}
        placeholder={placeHolder}
        placeholderTextColor="#d8d9d9"
        fontSize={0.018*screenHeight}
        onChangeText={(texto) => campo(texto)}
      />
      {error && <Text style={styles.TextoError}>Por favor, seleccione al menos una opción.</Text>}
    </View>
  );
}

export function InputSelect_Text2({ textoTitulo,GrupResp, textoTitulo1, onChange}) {
  const [selectedOption, setSelectedOptions] = useState([]);

  const handleSelectionChange = (selectedOptions) => {

    setSelectedOptions(selectedOptions);
    if (onChange) {
      onChange(selectedOptions.map(option => ({ label: option.label })));
    }
  }

  return (
    <View style={styles.box_1}>
      <Text style={styles.TextoGrids}>{textoTitulo}</Text>
      <Text style={styles.TextoGrids}>{textoTitulo1}</Text>
      <Seleccion_4 onChange={handleSelectionChange} GrupResp={GrupResp} />
    </View>
  );
}

export function InputSelect_Text3({placeHolder,textoTitulo2, textoTitulo3, GrupResp2, onChange,campo}) {
  const [selectedOption, setSelectedOptions] = useState([]);
  const [error, setError] = useState(false)

  const handleSelectionChange = (options) => {
    setSelectedOptions(options)

    if (options.length === 0) {
      setError(true);
    } else {
      setError(false);
    }

    if (onChange) {
      onChange(options.map(option => ({ label: option.label })))
    }
  }

  return (
    <View style={styles.box_1}>
      <Text style={styles.TextoGrids_2}>{textoTitulo2}</Text>
      <Seleccion_4 onChange={handleSelectionChange} GrupResp={GrupResp2} />
      <Text style={styles.TextoGrids_2}>{textoTitulo3}</Text>
      <TextInput
        style={styles.Texto}
        placeholder={placeHolder}
        placeholderTextColor="#d8d9d9"
        fontSize={0.018*screenHeight}
        onChangeText={(texto) => campo(texto)}
      />
      {error && <Text style={styles.TextoError}>Por favor, seleccione al menos una opción.</Text>}
    </View>
  );
}

export function SaveButton(props) {
  const { text, datos} = props;

  return (
    <TouchableOpacity
      style={{ ...styles.buttonSave, backgroundColor: "white" }}
      onPress={() => gestionarFormulario(datos)}>
      <Text style={{ ...styles.buttonText, color: "#000" }}>{text}</Text>
    </TouchableOpacity>
  );
}

export function CancelButton(props) {
  const { text } = props;

  return (
    <TouchableOpacity
      style={{ ...styles.buttonCancel, 
      backgroundColor: "#142ab5", 
      }}>
      <Text style={{ ...styles.buttonText, color: "white" }}>{text}</Text>
    </TouchableOpacity>
  );
}

