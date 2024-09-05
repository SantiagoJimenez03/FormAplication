import {
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Seleccion, Seleccion2 } from "./Seleccion";
import axios from "axios";
import { styles } from "../Styles/StylesTipoEntradas";
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from "@react-native-async-storage/async-storage";
import PropTypes from 'prop-types';
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
    await axios.post("http://192.168.20.28:3000/api/formulario",DatosFormulario);
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
  }

};

export function InputText(props) {
  const { textoTitulo, placeHolder, valor = '',campo, keyboardType } = props;
  const [variable, setvariable] = useState("");
  const [MensajeError, setMensajeError] = useState("");

  const validacionMensaje = (texto) =>{      
    setvariable(texto);
    variable.trim() ==="" ? setMensajeError("Campo obligatorio y no debe contener solo espacios*"):(setMensajeError(""), campo(texto));
  } 

  const validacionBlur = (valor) => {
    if(variable.trim() ===""){
      setMensajeError("Campo obligatorio y no debe contener solo espacios*");
    }else if (valor === "N_Doc" && variable.length<8 ){
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

  const [error, setError] = useState(false);

  const handleSelectChange = (options) => {

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
  const [error, setError] = useState(false)

  const handleSelectionChange = (options) => {

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
      <Seleccion2 onChange={handleSelectionChange} GrupResp={GrupResp} />
      {error && <Text style={styles.TextoError}>Por favor, seleccione al menos una opción.</Text>}
    </View>
  );
}



export function InputSelectText({onChange, textoTitulo,GrupResp,placeHolder,textoTitulo2,campo}) {
  const [selectedOptions, setSelectedOptions] = useState([])
  const [inText, setInText] = useState("")
  const [error, setError] = useState(false)

  const handleSelectChange = (options) => {
    if (!Array.isArray(options)) {
      console.error("Expected options to be an array, but got:", options);
      return;
    }
    
    setSelectedOptions(options);
  
    const selectedLabels = options.map(option => option?.respuesta || option?.label || "Sin etiqueta")
  
    if (selectedLabels.length === 0 && inText === "") {
      setError(true)
    } else {
      setError(false)
    }

    const combinedValues = [...selectedLabels, inText]
  
    if (onChange) {
      onChange(combinedValues)
    }
  };

  const handleTextChange = (texto) => {
    setInText(texto)
    handleSelectChange(selectedOptions)
  };

  return (
    <View style={styles.box_1}>
      <Text style={styles.TextoGrids}>{textoTitulo}</Text>
      <Seleccion2 onChange={handleSelectChange} GrupResp={GrupResp} />
      <Text style={styles.TextoGrids_2}>{textoTitulo2}</Text>
      <TextInput
        style={styles.Texto}
        placeholder={placeHolder}
        placeholderTextColor="#d8d9d9"
        fontSize={0.018*screenHeight}
        value={inText}
        onChangeText={handleTextChange}
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

InputText.propTypes = {
  textoTitulo: PropTypes.string,
  placeHolder: PropTypes.string, 
  keyboardType: PropTypes.string,
}

InputSelect.propTypes = {
  textoTitulo: PropTypes.string,
  GrupResp:PropTypes.number,
  onChange: PropTypes.func,
}

InputSelectMul.propTypes = {
  textoTitulo: PropTypes.string,
  GrupResp:PropTypes.number,
  onChange: PropTypes.func,
}

SaveButton.propTypes = {
  text: PropTypes.string,
  datos: PropTypes.array, 
}