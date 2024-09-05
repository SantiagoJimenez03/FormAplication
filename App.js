import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TextInput,
  StatusBar,
  Alert,
} from "react-native";

import { SaveButton, CancelButton } from "./components/TipoEntradas";
import { MES, DIA } from "./components/Mes";
import { styles } from "./Styles/StylesPrincipal";
import "react-native-gesture-handler";
import {
  InputText,
  InputSelect,
  InputSelectMul,
  InputSelect_Text,
  InputText_Cat1,
  InputSelect_Text2,
  InputSelect_Text3,
} from "./components/TipoEntradas";
import NetInfo from "@react-native-community/netinfo";
import {
  enviarFormulario,
  verificarReconexion,
} from "./components/TipoEntradas";

import {
  Datos_Personales,
  Datos_Comunicaciones,
  Datos_Socioeconomicos,
  Programas_Estales,
  Datos_Agremiacion_y_Ciudadania,
  Datos_Financieros,
  Datos_Georeferenciales_Predios_Productivos,
  Datos_Servicios_Publicos,
  Datos_Produccion_Agropecuaria,
  Informacion_de_Apoyo,
  LargoPreguntas,
  categorias,
} from "./components/Preguntas";

// enviarFormulario();

NetInfo.addEventListener((estado) => {
  if (estado.isConnected) {
    verificarReconexion();
  } else {
  }
});

export default function App() {
  const [mesSeleccionado, setmesSeleccionado] = useState("Enero")
  //const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(categorias[0])

  const Data = [];

  for (let j = 0; j < LargoPreguntas.length; j++) {
    let campo = {};
    for (let i = 1; i <= LargoPreguntas[j]; i++) {
      campo[`campo${i}`] = "";
    }
    Data.push(campo);
  }

  const [DatosFormulario, setDatosFormulario] = useState(Data);

  const llenarCampo = (id, contenido, categoria) => {
    const indice = categorias.indexOf(categoria);

    let contenidos = Array.isArray(contenido)
      ? contenido
          .map((item) => item.label || item.text || item.respuesta)
          .join(", ")
      : contenido;

    setDatosFormulario((prevState) => {
      const nuevoEstado = [...prevState];
      nuevoEstado[indice] = {
        ...nuevoEstado[indice],
        [`campo${id + 1}`]: contenidos,
        // [`tipo${id + 1}`]: categoria,
      };
      return nuevoEstado;
    });
  };

  // useEffect(() => {
  //   DatosFormulario.forEach((obj, index) => {
  //     console.log(`Objeto ${index + 1}:`);
  //     Object.entries(obj).forEach(([key, value]) => {
  //       console.log(`  ${key}: ${value}`);
  //     });
  //   });
  // }, [DatosFormulario]);

  const campos2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const campoCategorias = {
    5:1, 6:1, 7:1, 8:1, 9:1, 3:1, 4:1,
    0:4, 1:4, 2:4,
  };

  const initialState = campos2.reduce((acc, num) => {
    acc[`Texto_P_${num}`] = useState("");
    acc[`Sel_P_${num}`] = useState([]);
    return acc;
  }, {});

  useEffect(
    () => {
      const preguntas = campos2.map((num) => {
        const [texto, setTexto] = initialState[`Texto_P_${num}`];
        const [selecciones, setSelecciones] = initialState[`Sel_P_${num}`];
        const categoriaIndice = campoCategorias[num];

        return {
          campo: num,
          selecciones,
          texto,
          categoria:categorias[categoriaIndice],
        };
      });
      preguntas.forEach(({ campo, selecciones, texto, categoria }) => {
        const combinedValue = [...selecciones, texto ? { label: texto }:null,].filter(Boolean);
        llenarCampo(campo, combinedValue, categoria);
      });
    },
    campos2.flatMap((num) => [
      initialState[`Sel_P_${num}`][0],
      initialState[`Texto_P_${num}`][0],
    ])
  );

  const P_Seleccion = (selectedOptions, num) => {
    const [, setSelFunction] = initialState[`Sel_P_${num}`];
    setSelFunction(selectedOptions);
  };

  const P_Texto = (text, num) => {
    const [, setTextFunction] = initialState[`Texto_P_${num}`];
    setTextFunction(text);
  };

  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.Titulo}>FORMULARIO</Text>
          <Text style={styles.subTitulo}>
            SERVICIO PÚBLICO DE EXTENSIÓN AGROPECUARIA MUNICIPIO PUERTO RONDÓN -
            DEPARTAMENTO DE ARAUCA
          </Text>
          {/*--------------------------------------------------------------------------------------  */}
          <View style={styles.box_1}>
            <Text style={styles.subTituloCat}>
              1. DATOS PERSONALES DE CONTACTO
            </Text>

            <InputText
              textoTitulo={
                Datos_Personales.find((p) => p.id === 1)?.pregunta || ""
              }
              placeHolder="Ej: David"
              campo={(value) => llenarCampo(0, value, categorias[0])}
            />

            <InputText
              textoTitulo={
                Datos_Personales.find((p) => p.id === 2)?.pregunta || ""
              }
              placeHolder="Ej: Álvarez"
              campo={(value) => llenarCampo(1, value, categorias[0])}
            />

                    {/*------------------------------------------------  */}
            <View style={styles.box_fecha}>
              <Text style={styles.TextoGrids}>1.3 Fecha de nacimineto</Text>
              <View style={styles.box_2}>
                <View style={styles.fecha}>
                  <MES MesSeleccionado={setmesSeleccionado}></MES>
                </View>

                <View style={styles.fecha}>
                  <DIA mesSeleccionado={mesSeleccionado}></DIA>
                </View>

                <TextInput
                  style={styles.fecha}
                  keyboardType="numeric"
                  placeholder="Año"
                  placeholderTextColor="white"
                />
              </View>
            </View>
                    {/*------------------------------------------------  */}

            <InputText
              textoTitulo={
                Datos_Personales.find((p) => p.id === 4)?.pregunta || ""
              }
              placeHolder="Ej: Saravena, Arauca, Colombia"
              campo={(value) => llenarCampo(3, value, categorias[0])}
            />

            <InputSelect
              textoTitulo={
                Datos_Personales.find((p) => p.id === 5)?.pregunta || ""
              }
              GrupResp={0}
              onChange={(selectedOptions) =>
                llenarCampo(4, selectedOptions, categorias[0])
              }
            />

            <InputText
              textoTitulo={
                Datos_Personales.find((p) => p.id === 6)?.pregunta || ""
              }
              placeHolder="Ej: 12345678"
              campo={(value) => llenarCampo(5, value, categorias[0])}
            />

            <InputSelect
              textoTitulo={
                Datos_Personales.find((p) => p.id === 7)?.pregunta || ""
              }
              GrupResp={1}
              onChange={(selectedOptions) =>
                llenarCampo(6, selectedOptions, categorias[0])
              }
            />

            <InputText
              textoTitulo={
                Datos_Personales.find((p) => p.id === 8)?.pregunta || ""
              }
              placeHolder="Ej: 3219876543"
              campo={(value) => llenarCampo(7, value, categorias[0])}
            />

            <InputText
              textoTitulo={
                Datos_Personales.find((p) => p.id === 9)?.pregunta || ""
              }
              placeHolder="Ej: 3219876543"
              campo={(value) => llenarCampo(8, value, categorias[0])}
            />

            <InputText
              textoTitulo={
                Datos_Personales.find((p) => p.id === 10)?.pregunta || ""
              }
              placeHolder="Ej: 5.70492, -72.94146"
              campo={(value) => llenarCampo(9, value, categorias[0])}
            />

            <InputText
              textoTitulo={
                Datos_Personales.find((p) => p.id === 11)?.pregunta || ""
              }
              placeHolder="Ej: usuario@gmail.com"
              campo={(value) => llenarCampo(10, value, categorias[0])}
            />

            <InputText
              textoTitulo={
                Datos_Personales.find((p) => p.id === 12)?.pregunta || ""
              }
              placeHolder="Ej: usuario2@gmail.com"
              campo={(value) => llenarCampo(11, value, categorias[0])}
            />
          </View>
          {/*------------------------------------------------------------------------------- */}
          {/*------------------------------------------------------------------------------- */}
          <View style={styles.box_1}>
            <Text style={styles.subTituloCat}>
              2. DATOS DE COMUNICACIONES
            </Text>

            <InputSelect
              textoTitulo={
                Datos_Comunicaciones.find((p) => p.id === 1)?.pregunta || ""
              }
              GrupResp={2}
              onChange={(selectedOptions) =>
                llenarCampo(0, selectedOptions, categorias[1])
              }
            />

            <InputSelect
              textoTitulo={
                Datos_Comunicaciones.find((p) => p.id === 2)?.pregunta || ""
              }
              GrupResp={2}
              onChange={(selectedOptions) =>
                llenarCampo(1, selectedOptions, categorias[1])
              }
            />

            <InputSelect
              textoTitulo={
                Datos_Comunicaciones.find((p) => p.id === 3)?.pregunta || ""
              }
              GrupResp={2}
              onChange={(selectedOptions) =>
                llenarCampo(2, selectedOptions, categorias[1])
              }
            />

            <InputSelect
              textoTitulo={
                Datos_Comunicaciones.find((p) => p.id === 4)?.pregunta || ""
              }
              GrupResp={2}
              onChange={(selectedOptions) =>
                llenarCampo(3, selectedOptions, categorias[1])
              }
            />

            <InputSelect
              textoTitulo={
                Datos_Comunicaciones.find((p) => p.id === 5)?.pregunta || ""
              }
              GrupResp={2}
              onChange={(selectedOptions) =>
                llenarCampo(4, selectedOptions, categorias[1])
              }
            />

            <InputSelect_Text
              textoTitulo={
                Datos_Comunicaciones.find((p) => p.id === 6)?.pregunta || ""
              }
              GrupResp={3}
              textoTitulo2="Otra: "
              placeHolder="Ej: Biblioteca"
              onChange={(selectedOptions) => {P_Seleccion(selectedOptions, 5)
              }}
              campo={(value) => {P_Texto(value, 5)
              }}
            />

            <InputSelect_Text
              textoTitulo={
                Datos_Comunicaciones.find((p) => p.id === 7)?.pregunta || ""
              }
              GrupResp={4}
              textoTitulo2="Otra: "
              placeHolder="Ej: Twitter"
              onChange={(selectedOptions) => {P_Seleccion(selectedOptions, 6)
              }}
              campo={(value) => {P_Texto(value, 6)
              }}
            />

            <InputSelect_Text
              textoTitulo={
                Datos_Comunicaciones.find((p) => p.id === 8)?.pregunta || ""
              }
              GrupResp={5}
              textoTitulo2="Otra: "
              placeHolder="Ej: Snapchat"
              onChange={(selectedOptions) => {P_Seleccion(selectedOptions, 7)
              }}
              campo={(value) => {P_Texto(value, 7)
              }}
            />

            <InputSelect_Text
              textoTitulo={
                Datos_Comunicaciones.find((p) => p.id === 9)?.pregunta || ""
              }
              GrupResp={6}
              textoTitulo2="Otra: "
              placeHolder="Ej: Netflix"
              onChange={(selectedOptions) => {P_Seleccion(selectedOptions, 8)
              }}
              campo={(value) => {P_Texto(value, 8)
              }}
            />

            <InputSelect_Text
              textoTitulo={
                Datos_Comunicaciones.find((p) => p.id === 10)?.pregunta || ""
              }
              GrupResp={7}
              textoTitulo2="Otra: "
              placeHolder="Ej: Netzu"
              onChange={(selectedOptions) => {P_Seleccion(selectedOptions, 9)
              }}
              campo={(value) => {P_Texto(value, 9)
              }}
            />
          </View>
          {/*------------------------------------------------------------------------------- */}
          {/*------------------------------------------------------------------------------- */}
          <View style={styles.box_1}>
            <Text style={styles.subTituloCat}>
              3. DATOS SOCIOECONOMICOS
            </Text>
            
            <InputText
              textoTitulo={
                Datos_Socioeconomicos.find((p) => p.id === 1)?.pregunta || ""
              }
              placeHolder="Ej: 4"
              campo={(value) => llenarCampo(0, value, categorias[2])}
            />

            <InputText
              textoTitulo={
                Datos_Socioeconomicos.find((p) => p.id === 2)?.pregunta || ""
              }
              placeHolder="Ej: Sopla Mondá"
              campo={(value) => llenarCampo(1, value, categorias[2])}
            />

            <InputText
              textoTitulo={
                Datos_Socioeconomicos.find((p) => p.id === 3)?.pregunta || ""
              }
              placeHolder="Ej: 2"
              campo={(value) => llenarCampo(2, value, categorias[2])}
            />

            <InputSelect
              textoTitulo={
                Datos_Socioeconomicos.find((p) => p.id === 4)?.pregunta || ""
              }
              GrupResp={9}
              onChange={(selectedOptions) =>
                llenarCampo(3, selectedOptions, categorias[2])
              }
            />

            <InputSelectMul
              textoTitulo={
                Datos_Socioeconomicos.find((p) => p.id === 5)?.pregunta || ""
              }
              GrupResp={10}
              onChange={(selectedOptions) =>
                llenarCampo(4, selectedOptions, categorias[2])
              }
            />
          </View>
          {/*------------------------------------------------------------------------------- */}
          {/*------------------------------------------------------------------------------- */}
          <View style={styles.box_1}>
            <Text style={styles.subTituloCat}>
              4. PROGRAMAS ESTATALES
            </Text>
            
            <InputSelect
              textoTitulo={
                Programas_Estales.find((p) => p.id === 1)?.pregunta || ""
              }
              GrupResp={2}
              onChange={(selectedOptions) =>
                llenarCampo(0, selectedOptions, categorias[3])
              }
            />
            <InputSelect
              textoTitulo={
                Programas_Estales.find((p) => p.id === 2)?.pregunta || ""
              }
              GrupResp={11}
              onChange={(selectedOptions) =>
                llenarCampo(1, selectedOptions, categorias[3])
              }
            />
            <InputSelect
              textoTitulo={
                Programas_Estales.find((p) => p.id === 3)?.pregunta || ""
              }
              GrupResp={2}
              onChange={(selectedOptions) =>
                llenarCampo(2, selectedOptions, categorias[3])
              }
            />
            <InputSelect
              textoTitulo={
                Programas_Estales.find((p) => p.id === 4)?.pregunta || ""
              }
              GrupResp={2}
              onChange={(selectedOptions) =>
                llenarCampo(3, selectedOptions, categorias[3])
              }
            />
            <InputSelect
              textoTitulo={
                Programas_Estales.find((p) => p.id === 5)?.pregunta || ""
              }
              GrupResp={2}
              onChange={(selectedOptions) =>
                llenarCampo(4, selectedOptions, categorias[3])
              }
            />
            <InputSelect
              textoTitulo={
                Programas_Estales.find((p) => p.id === 6)?.pregunta || ""
              }
              GrupResp={2}
              onChange={(selectedOptions) =>
                llenarCampo(5, selectedOptions, categorias[3])
              }
            />
            <InputSelect
              textoTitulo={
                Programas_Estales.find((p) => p.id === 7)?.pregunta || ""
              }
              GrupResp={12}
              onChange={(selectedOptions) =>
                llenarCampo(6, selectedOptions, categorias[3])
              }
            />
            <InputSelect
              textoTitulo={
                Programas_Estales.find((p) => p.id === 8)?.pregunta || ""
              }
              GrupResp={2}
              onChange={(selectedOptions) =>
                llenarCampo(7, selectedOptions, categorias[3])
              }
            />
            <InputSelect
              textoTitulo={
                Programas_Estales.find((p) => p.id === 9)?.pregunta || ""
              }
              GrupResp={2}
              onChange={(selectedOptions) =>
                llenarCampo(8, selectedOptions, categorias[3])
              }
            />
          </View>
          {/*------------------------------------------------------------------------------- */}
          {/*------------------------------------------------------------------------------- */}
          <View style={styles.box_1}>
            <Text style={styles.subTituloCat}>
              5. DATOS DE AGREMIACIÓN Y CIUDADANÍA
            </Text>

            <InputSelect_Text
              textoTitulo={
                Datos_Agremiacion_y_Ciudadania.find((p) => p.id === 1)?.pregunta || ""
              }
              GrupResp={13}
              textoTitulo2="Otra: "
              placeHolder="Ej: -----------"
              onChange={(selectedOptions) => {P_Seleccion(selectedOptions, 0)
              }}
              campo={(value) => {P_Texto(value, 0)
              }}
            />
            <InputSelectMul
              textoTitulo={
                Datos_Agremiacion_y_Ciudadania.find((p) => p.id === 2)?.pregunta || ""
              }
              GrupResp={14}
              onChange={(selectedOptions) =>
                llenarCampo(1, selectedOptions, categorias[4])
              }
            />
            <InputSelect_Text
              textoTitulo={
                Datos_Agremiacion_y_Ciudadania.find((p) => p.id === 3)?.pregunta || ""
              }
              GrupResp={15}
              textoTitulo2="Otra: "
              placeHolder="Ej: -----------"
              onChange={(selectedOptions) => {P_Seleccion(selectedOptions, 2)
              }}
              campo={(value) => {P_Texto(value, 2)
              }}
            />
            <InputSelect
              textoTitulo={
                Datos_Agremiacion_y_Ciudadania.find((p) => p.id === 4)?.pregunta || ""
              }
              GrupResp={2}
              onChange={(selectedOptions) =>
                llenarCampo(3, selectedOptions, categorias[4])
              }
            />
          </View>
          {/*------------------------------------------------------------------------------- */}
          {/*------------------------------------------------------------------------------- */}
          <View style={styles.box_1}>
            <Text style={styles.subTituloCat}>
              6. DATOS FINANCIEROS
            </Text>

            <InputSelect
              textoTitulo={
                Datos_Financieros.find((p) => p.id === 1)?.pregunta || ""
              }
              GrupResp={2}
              onChange={(selectedOptions) =>
                llenarCampo(0, selectedOptions, categorias[5])
              }
            />
            <InputSelectMul
              textoTitulo={
                Datos_Financieros.find((p) => p.id === 2)?.pregunta || ""
              }
              GrupResp={16}
              onChange={(selectedOptions) =>
                llenarCampo(1, selectedOptions, categorias[5])
              }
            />
            {/* <InputSelect_Text
              textoTitulo={
                Datos_Financieros.find((p) => p.id === 3)?.pregunta || ""
              }
              GrupResp={17}
              textoTitulo2="Otra: "
              placeHolder="Ej: -----------"
              onChange={(selectedOptions) => {P_Seleccion(selectedOptions, 2)
              }}
              campo={(value) => {P_Texto(value, 2)
              }}
            /> */}
            <InputSelect
              textoTitulo={
                Datos_Financieros.find((p) => p.id === 4)?.pregunta || ""
              }
              GrupResp={2}
              onChange={(selectedOptions) =>
                llenarCampo(3, selectedOptions, categorias[5])
              }
            />
          </View>
          {/*------------------------------------------------------------------------------- */}
          {/*------------------------------------------------------------------------------- */}
          <View style={styles.box_1}>
            <Text style={styles.subTituloCat}>
              7. DATOS GEOREFERENCIALES PREDIOS PRODUCTIVOS
            </Text>

            <InputText
              textoTitulo={
                Datos_Georeferenciales_Predios_Productivos.find((p) => p.id === 1)?.pregunta || ""
              }
              placeHolder="Ej: 5.70492, -72.94146"
              campo={(value) => llenarCampo(0, value, categorias[6])}
            />
            <InputSelect
              textoTitulo={
                Datos_Georeferenciales_Predios_Productivos.find((p) => p.id === 2)?.pregunta || ""
              }
              GrupResp={2}
              onChange={(selectedOptions) =>
                llenarCampo(1, selectedOptions, categorias[6])
              }
            />
            <InputText
              textoTitulo={
                Datos_Georeferenciales_Predios_Productivos.find((p) => p.id === 3)?.pregunta || ""
              }
              placeHolder="Ej: 8 m^2"
              campo={(value) => llenarCampo(2, value, categorias[6])}
            />
            <InputText
              textoTitulo={
                Datos_Georeferenciales_Predios_Productivos.find((p) => p.id === 4)?.pregunta || ""
              }
              placeHolder="Ej: El estanquito"
              campo={(value) => llenarCampo(3, value, categorias[6])}
            />
            <InputSelect
              textoTitulo={
                Datos_Georeferenciales_Predios_Productivos.find((p) => p.id === 5)?.pregunta || ""
              }
              GrupResp={2}
              onChange={(selectedOptions) =>
                llenarCampo(4, selectedOptions, categorias[6])
              }
            />
            <InputSelect
              textoTitulo={
                Datos_Georeferenciales_Predios_Productivos.find((p) => p.id === 6)?.pregunta || ""
              }
              GrupResp={18}
              onChange={(selectedOptions) =>
                llenarCampo(5, selectedOptions, categorias[6])
              }
            />
            <InputText
              textoTitulo={
                Datos_Georeferenciales_Predios_Productivos.find((p) => p.id === 7)?.pregunta || ""
              }
              placeHolder="Ej: 1234567"
              campo={(value) => llenarCampo(6, value, categorias[6])}
            />
            <InputText
              textoTitulo={
                Datos_Georeferenciales_Predios_Productivos.find((p) => p.id === 8)?.pregunta || ""
              }
              placeHolder="Ej: Arauca"
              campo={(value) => llenarCampo(7, value, categorias[6])}
            />
            <InputText
              textoTitulo={
                Datos_Georeferenciales_Predios_Productivos.find((p) => p.id === 9)?.pregunta || ""
              }
              placeHolder="Ej: Saravena"
              campo={(value) => llenarCampo(8, value, categorias[6])}
            />
            <InputText
              textoTitulo={
                Datos_Georeferenciales_Predios_Productivos.find((p) => p.id === 10)?.pregunta || ""
              }
              placeHolder="Ej: La Pava"
              campo={(value) => llenarCampo(9, value, categorias[6])}
            />
            <InputText
              textoTitulo={
                Datos_Georeferenciales_Predios_Productivos.find((p) => p.id === 11)?.pregunta || ""
              }
              placeHolder="Ej: ------------"
              campo={(value) => llenarCampo(10, value, categorias[6])}
            />
            <InputSelect
              textoTitulo={
                Datos_Georeferenciales_Predios_Productivos.find((p) => p.id === 12)?.pregunta || ""
              }
              GrupResp={19}
              onChange={(selectedOptions) =>
                llenarCampo(11, selectedOptions, categorias[6])
              }
            />
            <InputSelect
              textoTitulo={
                Datos_Georeferenciales_Predios_Productivos.find((p) => p.id === 13)?.pregunta || ""
              }
              GrupResp={2}
              onChange={(selectedOptions) =>
                llenarCampo(12, selectedOptions, categorias[6])
              }
            />
          </View>
          {/*------------------------------------------------------------------------------- */}
          {/*------------------------------------------------------------------------------- */}
          <View style={styles.box_1}>
            <Text style={styles.subTituloCat}>
              8. DATOS DE SERVICIOS PÚBLICOS
            </Text>

            <InputSelect
              textoTitulo={
                Datos_Servicios_Publicos.find((p) => p.id === 1)?.pregunta || ""
              }
              GrupResp={2}
              onChange={(selectedOptions) =>
                llenarCampo(0, selectedOptions, categorias[7])
              }
            />
            <InputSelect
              textoTitulo={
                Datos_Servicios_Publicos.find((p) => p.id === 2)?.pregunta || ""
              }
              GrupResp={20}
              onChange={(selectedOptions) =>
                llenarCampo(1, selectedOptions, categorias[7])
              }
            />
            <InputSelectMul
              textoTitulo={
                Datos_Servicios_Publicos.find((p) => p.id === 3)?.pregunta || ""
              }
              GrupResp={21}
              onChange={(selectedOptions) =>
                llenarCampo(2, selectedOptions, categorias[7])
              }
            />
            <InputSelectMul
              textoTitulo={
                Datos_Servicios_Publicos.find((p) => p.id === 4)?.pregunta || ""
              }
              GrupResp={22}
              onChange={(selectedOptions) =>
                llenarCampo(3, selectedOptions, categorias[7])
              }
            />
            {/* <InputSelect_Text
              textoTitulo={
                Datos_Servicios_Publicos.find((p) => p.id === 5)?.pregunta || ""
              }
              GrupResp={23}
              textoTitulo2="Otra: "
              placeHolder="Ej: -----------"
              onChange={(selectedOptions) => {P_Seleccion(selectedOptions, 4)
              }}
              campo={(value) => {P_Texto(value, 4)
              }}
            /> */}
            <InputSelect
              textoTitulo={
                Datos_Servicios_Publicos.find((p) => p.id === 6)?.pregunta || ""
              }
              GrupResp={24}
              onChange={(selectedOptions) =>
                llenarCampo(5, selectedOptions, categorias[7])
              }
            />
            <InputSelectMul
              textoTitulo={
                Datos_Servicios_Publicos.find((p) => p.id === 7)?.pregunta || ""
              }
              GrupResp={25}
              onChange={(selectedOptions) =>
                llenarCampo(6, selectedOptions, categorias[7])
              }
            />
            <InputSelect
              textoTitulo={
                Datos_Servicios_Publicos.find((p) => p.id === 8)?.pregunta || ""
              }
              GrupResp={26}
              onChange={(selectedOptions) =>
                llenarCampo(7, selectedOptions, categorias[7])
              }
            />
          </View>
          {/*------------------------------------------------------------------------------- */}
          {/*------------------------------------------------------------------------------- */}
          <View style={styles.box_1}>
            <Text style={styles.subTituloCat}>
              9. DATOS DE PRODUCCIÓN AGROPECUARIA
            </Text>

            <InputText
              textoTitulo={
                Datos_Produccion_Agropecuaria.find((p) => p.id === 1)?.pregunta || ""
              }
              placeHolder="Ej: ------------"
              campo={(value) => llenarCampo(0, value, categorias[8])}
            />
            {/* <InputSelect_Text
              textoTitulo={
                Datos_Produccion_Agropecuaria.find((p) => p.id === 2)?.pregunta || ""
              }
              GrupResp={27}
              textoTitulo2="Otra: "
              placeHolder="Ej: -----------"
              onChange={(selectedOptions) => {P_Seleccion(selectedOptions, 1)
              }}
              campo={(value) => {P_Texto(value, 1)
              }}
            /> */}
            <InputText
              textoTitulo={
                Datos_Produccion_Agropecuaria.find((p) => p.id === 3)?.pregunta || ""
              }
              placeHolder="Ej: ------------"
              campo={(value) => llenarCampo(2, value, categorias[8])}
            />
            <InputText
              textoTitulo={
                Datos_Produccion_Agropecuaria.find((p) => p.id === 4)?.pregunta || ""
              }
              placeHolder="Ej: ------------"
              campo={(value) => llenarCampo(3, value, categorias[8])}
            />
            <InputText
              textoTitulo={
                Datos_Produccion_Agropecuaria.find((p) => p.id === 5)?.pregunta || ""
              }
              placeHolder="Ej: ------------"
              campo={(value) => llenarCampo(4, value, categorias[8])}
            />
            <InputSelect
              textoTitulo={
                Datos_Produccion_Agropecuaria.find((p) => p.id === 6)?.pregunta || ""
              }
              GrupResp={2}
              onChange={(selectedOptions) =>
                llenarCampo(5, selectedOptions, categorias[8])
              }
            />
            <InputSelect
              textoTitulo={
                Datos_Produccion_Agropecuaria.find((p) => p.id === 7)?.pregunta || ""
              }
              GrupResp={2}
              onChange={(selectedOptions) =>
                llenarCampo(6, selectedOptions, categorias[8])
              }
            />
            <InputSelect
              textoTitulo={
                Datos_Produccion_Agropecuaria.find((p) => p.id === 8)?.pregunta || ""
              }
              GrupResp={2}
              onChange={(selectedOptions) =>
                llenarCampo(7, selectedOptions, categorias[8])
              }
            />
            <InputSelect
              textoTitulo={
                Datos_Produccion_Agropecuaria.find((p) => p.id === 9)?.pregunta || ""
              }
              GrupResp={2}
              onChange={(selectedOptions) =>
                llenarCampo(8, selectedOptions, categorias[8])
              }
            />
            <InputText
              textoTitulo={
                Datos_Produccion_Agropecuaria.find((p) => p.id === 10)?.pregunta || ""
              }
              placeHolder="Ej: ------------"
              campo={(value) => llenarCampo(9, value, categorias[8])}
            />
            <InputText
              textoTitulo={
                Datos_Produccion_Agropecuaria.find((p) => p.id === 11)?.pregunta || ""
              }
              placeHolder="Ej: 50 m^2"
              campo={(value) => llenarCampo(10, value, categorias[8])}
            />
            <InputText
              textoTitulo={
                Datos_Produccion_Agropecuaria.find((p) => p.id === 12)?.pregunta || ""
              }
              placeHolder="Ej: -------------"
              campo={(value) => llenarCampo(11, value, categorias[8])}
            />
            <InputText
              textoTitulo={
                Datos_Produccion_Agropecuaria.find((p) => p.id === 13)?.pregunta || ""
              }
              placeHolder="Ej: -------------"
              campo={(value) => llenarCampo(12, value, categorias[8])}
            />
            <InputSelectMul
              textoTitulo={
                Datos_Produccion_Agropecuaria.find((p) => p.id === 14)?.pregunta || ""
              }
              GrupResp={28}
              onChange={(selectedOptions) =>
                llenarCampo(13, selectedOptions, categorias[87])
              }
            />
          </View>
          {/*------------------------------------------------------------------------------- */}
          {/*------------------------------------------------------------------------------- */}
          <View style={styles.box_1}>
            <Text style={styles.subTituloCat}>
              10. INFORMACIÓN DE APOYO
            </Text>

            <InputText
              textoTitulo={
                Informacion_de_Apoyo.find((p) => p.id === 1)?.pregunta || ""
              }
              placeHolder="Ej: Luis, tío, 3219876543"
              campo={(value) => llenarCampo(0, value, categorias[9])}
            />
          </View>
          {/*------------------------------------------------------------------------------- */}
          {/*------------------------------------------------------------------------------- */}

          <SaveButton text="GUARDAR" datos={DatosFormulario} />
          <CancelButton text="CANCELAR" />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
