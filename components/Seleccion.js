import React, { useState } from "react";
import { SeleccionGeneral, SeleccionGeneral2 } from "./SeleccionJunior";
import { GrupoRespuestas } from "./Respuestas";
import { Full_Categorias } from "./For_Respuestas";

export function Seleccion({ onChange = () => {}, multiple = false, GrupResp }) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  //const options = GrupoRespuestas[GrupResp];
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
  // const options = GrupoRespuestas[GrupResp];
  const options = Full_Categorias[GrupResp];

  return <SeleccionGeneral2 onChange={onChange} options={options} />;
}
