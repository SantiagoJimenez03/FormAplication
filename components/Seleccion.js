import React, { useState } from "react";
import { SeleccionGeneral, SeleccionGeneral2 } from "./SeleccionJunior";
import { Full_Categorias } from "./For_Respuestas";
import PropTypes from 'prop-types';


export function Seleccion({ onChange = () => {}, multiple = false, GrupResp }) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = Full_Categorias[GrupResp];

  return (
    <SeleccionGeneral
      onChange={onChange}
      multiple={multiple}
      options={options}
    />
  );
}

export function Seleccion_4({ onChange = () => {}, GrupResp }) {
  const options = Full_Categorias[GrupResp];
  return <SeleccionGeneral2 onChange={onChange} options={options} />;
}

Seleccion.PropTypes = {
  onChange: PropTypes.string,
  multiple: PropTypes.bool,
  GrupResp: PropTypes.number, 
}

Seleccion_4.PropTypes = {
  onChange: PropTypes.string,
  GrupResp: PropTypes.number, 
}