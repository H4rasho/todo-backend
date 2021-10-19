const express = require("express");
const { dbConnection } = require("./database/config");
const app = express();
const port = 4000;

// Base de datos

dbConnection();

// Lectura y parseo del body
app.use(express.json());

// Rutas

app.use("/api/todo", require("./routes/todo"));
app.use("/api/user", require("./routes/user"));

// Encendiendo el servidor

app.listen(port, () => {
  console.log(`Servidor encendido en el puerto ${port}`);
});
