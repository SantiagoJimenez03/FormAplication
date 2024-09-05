import React from "react";
import { SeleccionGeneral, SeleccionGeneral2 } from "./SeleccionJunior";
import { Full_Categorias } from "./For_Respuestas";
import PropTypes from 'prop-types';


export function Seleccion({ onChange = () => {}, multiple = false, GrupResp }) {
  const options = Full_Categorias[GrupResp];

  return (
    <SeleccionGeneral
      onChange={onChange}
      multiple={multiple}
      options={options}
    />
  );
}

export function Seleccion2({ onChange= () => {}, GrupResp }) {
  const options = Full_Categorias[GrupResp];
  return <SeleccionGeneral2 onChange={onChange} options={options} />;
  
}

Seleccion.propTypes = {
  onChange: PropTypes.func,
  multiple: PropTypes.bool,
  GrupResp: PropTypes.number, 
}

Seleccion2.propTypes = {
  onChange: PropTypes.func,
  GrupResp: PropTypes.number, 
}