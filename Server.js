const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "app_formulario",
  port: "3306",
});

//Conexion a la base de datos
connection.connect((error) => {
  if (error) {
    console.error("Error connecting to MySQL database:", error);
  } else {
    console.log("Connected to MySQL database!");
  }
});

app.post("/api/formulario", async (req, res) => {
  const campo = { ...req.body };

  let arrayCategorias = {};

  for (let i = 1; i <= 10; i++) {
    arrayCategorias[`arrayC${i}`] = [];
  }

  for (let i = 0; i < Object.keys(campo).length; i++) {
    for (const propiedad in campo[i]) {
      let claves = Object.keys(campo[i]);
      let id = claves.indexOf(propiedad);
      let valor = campo[i][propiedad];

      arrayCategorias[`arrayC${i + 1}`].push(valor, id + 1);
    }
  }

  const valorMaximo = Math.max(
    ...Object.values(arrayCategorias).map((array) => array.length)
  );

  const categorias = [
    arrayCategorias.arrayC1,
    arrayCategorias.arrayC2,
    arrayCategorias.arrayC3,
    arrayCategorias.arrayC4,
    arrayCategorias.arrayC5,
    arrayCategorias.arrayC6,
    arrayCategorias.arrayC7,
    arrayCategorias.arrayC8,
    arrayCategorias.arrayC9,
    arrayCategorias.arrayC10,
  ];

  const valores = Array.from({ length: 10 }, () => []);

  for (let i = 0; i < valorMaximo; i += 2) {
    categorias.forEach((categoria, index) => {
      if (i < categoria.length) {
        categoria[i] != "" ? valores[index].push([categoria[i], categoria[i + 1]]):null;
      }
    });
  }

  const query = [
    "INSERT INTO Respuestas_Datos_Personales (Respuesta, id_Preguntas) VALUES ?",
    "INSERT INTO Respuestas_Datos_Comunicaciones (Respuesta, id_Preguntas) VALUES ?",
    "INSERT INTO Respuestas_Datos_Socioeconomicos (Respuesta, id_Preguntas) VALUES ?",
    "INSERT INTO Respuestas_Programas_Estales (Respuesta, id_Preguntas) VALUES ?",
    "INSERT INTO Respuestas_Datos_Agremiacion_y_Ciudadania (Respuesta, id_Preguntas) VALUES ?",
    "INSERT INTO Respuestas_Datos_Financieros (Respuesta, id_Preguntas) VALUES ?",
    "INSERT INTO Respuestas_Datos_Georeferenciales_Predios_Productivos (Respuesta, id_Preguntas) VALUES ?",
    "INSERT INTO Respuestas_Datos_Servicios_Publicos (Respuesta, id_Preguntas) VALUES ?",
    "INSERT INTO Respuestas_Datos_Produccion_Agropecuaria (Respuesta, id_Preguntas) VALUES ?",
    "INSERT INTO Respuestas_Preguntas_Informacion_de_Apoyo (Respuesta, id_Preguntas) VALUES ?",
  ];

  const envio_query = (solicitud, valor) => {
    new Promise((resolve, reject) => {
      resolve(solicitud_query(solicitud, valor));
    });
  };

  const solicitud_query = (query, values) => {
    console.log(values);
    connection.query(query, [values], (error, results1) => {
      if (error) {
        return res.status(500).json({ error: "Error en la consulta" });
      }
    });
  };

  for (let i = 0; i < 10; i++) {
     envio_query(query[i], valores[i]);
  }

  return res.status(200).json({
    message: "Datos guardados correctamente en todas las tablas",
  });
});
 
app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
