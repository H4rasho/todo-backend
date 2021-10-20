/* eslint-disable no-undef */
const express = require("express");
const { dbConnection } = require("./database/config");
const app = express();
require("dotenv").config();

// Base de datos

dbConnection();

// Lectura y parseo del body
app.use(express.json());

// Rutas

app.use("/api/todo", require("./routes/todo"));

// Encendiendo el servidor

app.listen(process.env.PORT, () => {
  console.log(`Servidor encendido en el puerto ${process.env.PORT}`);
});
