import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { styles } from "../Styles/StylesSeleccionJunior";
import PropTypes from 'prop-types';

const { height: screenHeight } = Dimensions.get("window");

export function SeleccionGeneral({ onChange, multiple = false, options }) {
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const selectedOptions = selected.map((id) => {
      const option = options.find((opt) => opt.id === id);
      return { id, label: option?.respuesta || "" };
    });
    onChange(selectedOptions);
  }, [selected]);

  function toggle(id) {
    let index = selected.findIndex((i) => i === id);
    let arrSelecteds = [...selected];
    if (index !== -1) {
      arrSelecteds.splice(index, 1);
    } else {
      multiple ? arrSelecteds.push(id) : (arrSelecteds = [id]);
    }
    setSelected(arrSelecteds);
  }

  return (
    <View style={styles.Opciones}>
      {options.map((op) => (
        <TouchableOpacity
          key={op.id}
          style={styles.seleccion}
          onPress={() => toggle(op?.id)}>
          <View style={styles.checkBox}>
            {selected.findIndex((i) => i === op.id) !== -1 ? (
              <MaterialCommunityIcons
                name="check-bold"
                size={0.023 * screenHeight}
                color='#142ab5'
              />
            ) : null}
          </View>
          <Text style={styles.textSeleccion}>{op?.respuesta}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export function SeleccionGeneral2({ onChange, options }) {
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const selectedOptions = selected.map((id) => {
      const option = options.find((opt) => opt.id === id);
      return option ? { id, label: option.respuesta } : null;
    }).filter((option) => option !== null);
    onChange(selectedOptions);
  }, [selected]);

  function toggle(id) {
    let index = selected.findIndex((i) => i === id);
    let arrSelecteds = [...selected];
    if (index !== -1) {
      arrSelecteds.splice(index, 1);
    } else {
      arrSelecteds.push(id);
    }
    setSelected(arrSelecteds);
  }
  return (
    <View style={styles.Opciones}>
      {options.map((op) => (
        <TouchableOpacity
          key={op.id}
          style={styles.seleccion}
          onPress={() => toggle(op?.id)}
        >
          <View style={styles.checkBox}>
            {selected.findIndex((i) => i === op.id) !== -1 ? (
              <MaterialCommunityIcons
                name="check-bold"
                size={0.023 * screenHeight}
                color='#142ab5'
              />
            ) : null}
          </View>
          <Text style={styles.textSeleccion}>{op?.respuesta}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

SeleccionGeneral.propTypes = {
  onChange: PropTypes.func,
  multiple: PropTypes.bool,
  options: PropTypes.array, 
}

SeleccionGeneral2.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.array, 
}