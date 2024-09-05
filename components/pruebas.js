
const Datos_Personales = [
  //1
  { pregunta: "Nombre(s)", id: 1 },
  { pregunta: "Apellido(2)", id: 2 },
  { pregunta: "Fecha de Nacimiento", id: 3 },
  { pregunta: "Lugar de Nacimiento", id: 4 },
  { pregunta: "Tipo de Documento", id: 5 },
  { pregunta: "Número de documento", id: 6 },
  { pregunta: "Sexo al nacimiento", id: 7 },
  { pregunta: "Número celular 1", id: 8 },
  { pregunta: "Número celular 2", id: 9 },
  { pregunta: "Coordenadas de la vivienda familiar", id: 10 },
  { pregunta: "Correo electrónico 1", id: 11 },
  { pregunta: "Correo electrónico 2", id: 12 },
];

const Datos_Comunicaciones = [
  //2
  { pregunta: "Usa internet?", id: 1 },
  { pregunta: "Usa internet móvil (celular)?", id: 2 },
  { pregunta: "Usa internet fijo en casa con medio cableado?", id: 3 },
  { pregunta: "Usa internet fijo en casa con medio inalámbrico?", id: 4 },
  { pregunta: "Usa internet fijo en casa con medio satelital?", id: 5 },
  { pregunta: "De qué otra forma accede a internet?", id: 6 },
  { pregunta: "Qué sistema de mensajería emplea?", id: 7 },
  { pregunta: "Qué redes sociales emplea?", id: 8 },
  { pregunta: "Qué plataformas de video emplea?", id: 9 },
  { pregunta: "Qué plataforma educativa emplea o ha empleado?", id: 10 },
];

const Datos_Socioeconomicos = [
  //3
  { pregunta: "Número de personas que conforman el núcleo familiar", id: 1 },
  { pregunta: "Quienes conforman el núcleo?", id: 2 },
  { pregunta: "Cuántas personas aportan a la economía familiar?", id: 3 },
  { pregunta: "Qué valor promedio aportan mensualmente?", id: 4 },
  {
    pregunta:
      "¿Es usted usuario/usuaria de alguna de las siguientes líneas especiales de crédito para el sector agropecuario?",
    id: 5,
  },
];

const Programas_Estales = [
  //4
  { pregunta: "Cuenta usted con Sisben?", id: 1 },
  { pregunta: "En qué grupo de Sisben se encuentra?", id: 2 },
  {
    pregunta:
      "¿Es usted beneficiario/beneficiaria de procesos de reincorporación y/o reinserción a la sociedad civil?",
    id: 3,
  },
  {
    pregunta:
      "¿Tiene usted la condición de víctima en los términos de la ley 1448 de 2011?",
    id: 4,
  },
  {
    pregunta: "¿Usted se considera mujer rural conforme a la Ley 731 de 2002?",
    id: 5,
  },
  {
    pregunta:
      "¿Es usted beneficiario/beneficiaria del fondo de tierras en los términos del Decreto-Ley 902 de 2017?",
    id: 6,
  },
  { pregunta: "Pertenencia étnica?", id: 7 },
  {
    pregunta:
      "¿Hace parte de la población objetivo de los Planes de Acción para la Transformación Regional, PATR, de los programas de Desarrollo con Enfoque Territorial (PDET) definidos en el decreto-Ley 893 de 2017?",
    id: 8,
  },
  {
    pregunta:
      "¿Hace parte de la población objetivo de los Planes Integrales Comunitarios y Municipales de Sustitución y Desarrollo Alternativo, PISDA, del programa Nacional Integral de Sustitución de Cultivos de Uso ilícito (PNIS) en los términos del Decreto-Ley 896 de 2017?",
    id: 9,
  },
];

const Datos_Agremiacion_y_Ciudadania = [
  //5
  { pregunta: "¿Pertenece usted a alguna figura colectiva?", id: 1 },
  {
    pregunta: "¿Cuáles mecanismos de participación ciudadana conoce usted?",
    id: 2,
  },
  { pregunta: "¿Ha hecho parte de algún espacio como?", id: 3 },
  {
    pregunta:
      "¿Conoce y/o gestiona planes, programas o proyectos para beneficiar a su comunidad?",
    id: 4,
  },
];

const Datos_Financieros = [
  //6
  {
    pregunta:
      "¿Ha solicitado algún crédito o préstamo para sus actividades productivas?",
    id: 1,
  },
  { pregunta: "¿Con cuáles figuras accede a recursos económicos?", id: 2 },
  {
    pregunta:
      "¿Es usted usuario/usuaria de alguna de las siguientes líneas especiales de crédito para el sector agropecuario?",
    id: 3,
  },
  {
    pregunta:
      "¿Se encuentra interesado en recibir oferta institucional del ministerio de agricultura?",
    id: 4,
  },
];

const Datos_Georeferenciales_Predios_Productivos = [
  //7
  {
    pregunta:
      "Si el predio es diferente al lugar de vivienda, favor adicionar las coordenadas del predio",
    id: 1,
  },
  { pregunta: "Posee varios predios productivos", id: 2 },
  { pregunta: "¿Cuál es el área total de su predio o predios?", id: 3 },
  { pregunta: "¿Cuál es el nombre del predio o finca?", id: 4 },
  {
    pregunta:
      "Es un predio con sus documentos en regla?, refiérase al de mayor extensión",
    id: 5,
  },
  {
    pregunta: "Si la respuesta anterior es no, ¿qué problema presenta?",
    id: 6,
  },
  {
    pregunta:
      "¿Recuerda el número catastral del predio? Refíerase al de mayor extensión",
    id: 7,
  },
  { pregunta: "Nombre de Departamento", id: 8 },
  { pregunta: "Nombre de municipio", id: 9 },
  { pregunta: "Nombre de la vereda", id: 10 },
  {
    pregunta:
      "Descripción de la vereda desde el punto de vista de subsistencia de la población de su vereda, en porcentajes",
    id: 11,
  },
  {
    pregunta:
      "¿Cuál es la figura de tenencia del predio en el que se prestará el servicio público de extensión agropecuaria?",
    id: 12,
  },
  { pregunta: "¿Su predio está registrado ante el ICA?", id: 13 },
];

const Datos_Servicios_Publicos = [
  //8
  { pregunta: "¿Cuenta con agua potable?", id: 1 },
  { pregunta: "¿La disponibilidad de agua en su predio es?", id: 2 },
  {
    pregunta:
      "Seleccione la fuente de donde proviene el agua que utiliza en su vivienda – predio",
    id: 3,
  },
  {
    pregunta:
      "¿Con cuáles de estos servicios domésticos cuenta su predio?, puede seleccionar varios.",
    id: 4,
  },
  { pregunta: "¿Con qué tipos de acceso vial cuenta su predio?", id: 1 },
  {
    pregunta: "¿En qué estado se encuentra el acceso vial a su predio?",
    id: 2,
  },
  {
    pregunta:
      "¿Cuál es el medio de transporte que usa para llegar a la cabecera municipal?",
    id: 3,
  },
  {
    pregunta:
      "¿Cuánto tiempo tarda en llegar desde su predio a la cabecera municipal?",
    id: 4,
  },
];

const Datos_Produccion_Agropecuaria = [
  //9
  {
    pregunta:
      "De la respuesta dada en el numeral 7.3, se obtienen las áreas totales del predio o predios; - Área o extensión total - Área o extensión total aprovechada - Área o extensión total no aprovechada Por favor escriba estas áreas:",
    id: 1,
  },
  {
    pregunta:
      "Del área o extensión total no aprovechada a nivel agropecuaria, defina su estado:",
    id: 2,
  },
  {
    pregunta:
      "De la extensión o área aprovechada, defina en qué líneas de producción la emplea hoy?, se define línea de producción a la acción de producir para generar recursos económicos, y no meramente una producción de sostenibilidad:",
    id: 3,
  },
  { pregunta: "Si la línea es pecuaria complete la siguiente tabla:", id: 4 },
  {
    pregunta: "Si la línea es bovinos complete por favor la información:",
    id: 5,
  },
  {
    pregunta:
      "El principal objetivo de su línea de producción bovina es el doble propósito (leche y ceba)?",
    id: 6,
  },
  {
    pregunta: "El principal objetivo de su línea de producción bovina es cría?",
    id: 7,
  },
  {
    pregunta:
      "El principal objetivo de su línea de producción bovina es leche?",
    id: 8,
  },
  {
    pregunta: "El principal objetivo de su línea de producción bovina es ceba?",
    id: 9,
  },
  {
    pregunta:
      "Escriba un número de 1 a 6, en orden de importancia, de acuerdo a la necesidad de apoyo que requiere en su producción pecuaria.",
    id: 10,
  },
  {
    pregunta:
      "Según el punto 9.3, ¿cuál sería el área aprovechada de su predio para la producción agrícola?",
    id: 11,
  },
  {
    pregunta:
      "Del total del área asignada a la producción agrícola defina en porcentajes en qué línea de producción aprovecha el total de esta área?",
    id: 12,
  },
  { pregunta: "Por favor completar la siguiente tabla:", id: 13 },
  {
    pregunta:
      "¿Dónde venden la mayoría de sus productos?, seleccione las opciones que considere necesarias",
    id: 14,
  },
];

const Informacion_de_Apoyo = [
  //10
  {
    pregunta:
      "Nombre, PARENTESCO Y número celular de la persona que apoya el diligenciamiento del presente formulario",
    id: 1,
  },
];

// console.log(Datos_Personales.length)
const LargoPreguntas = [
  Datos_Personales.length,
  Datos_Comunicaciones.length,
  Datos_Socioeconomicos.length,
  Programas_Estales.length,
  Datos_Agremiacion_y_Ciudadania.length,
  Datos_Financieros.length,
  Datos_Georeferenciales_Predios_Productivos.length,
  Datos_Servicios_Publicos.length,
  Datos_Produccion_Agropecuaria.length,
  Informacion_de_Apoyo.length,
];


const Data = [];
let campo = {};

for (let j = 0; j < LargoPreguntas.length; j++) {
  let campo = {};
  for (let i = 1; i <= LargoPreguntas[j]; i++) {
    campo[`campo${i}`] = "";
  }
  Data.push(campo);
}

//

const categorias = [
  "Datos_Personales",
  "Datos_Comunicaciones",
  "Datos_Socioeconomicos",
  "Programas_Estales",
  "Datos_Agremiacion_y_Ciudadania",
  "Datos_Financieros",
  "Datos_Georeferenciales_Predios_Productivos",
  "Datos_Servicios_Publicos",
  "Datos_Accesibilidad_al_Predio",
  "Datos_Produccion_Agropecuaria",
];

const clave = Object.keys(categorias);


// const llenarFormualario = (id,categoria,contenido)=>{
//   const indice = categorias.indexOf(categoria);
//   campo[indice][`campo${id}`] = contenido;
//   campo[indice][`tipo${id}`] = categoria;

// };

const indice = categorias.indexOf(categorias[2]);
//[{Datos personales},{Datos Comunicaciones},{}]{}


const vectorc = Array.from({length:10},() => []);

console.log(vectorc)
//  console.log(LargoPreguntas);
// console.log(Data.length)
//  console.log(Data);

// console.log(Data[1]["tipo3"])