const { response } = require("express");

const crearTodo = async () => {};

const obtenerTodos = async (req, res = response) => {
  res.json({
    ok: true,
    msg: "success",
  });
};

module.exports = {
  obtenerTodos,
  crearTodo,
};
