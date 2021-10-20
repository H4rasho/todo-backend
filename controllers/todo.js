const { response } = require("express");
const Todo = require("../models/Todo");

const crearTodo = async (req, res) => {
  const todo = new Todo(req.body);

  try {
    todo.user = req.uid;
    const todoDB = await todo.save();
    res.status(201).json({
      ok: true,
      todoDB,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Porfavor hable con el administrador",
    });
  }
};

const obtenerTodos = async (req, res = response) => {
  const { uid } = req;

  try {
    const todos = await Todo.find({ user: uid.toString() });
    if (!todos) {
      return res.status(404).json({
        ok: false,
        msg: "todos no encontrados para ese usuario",
      });
    }

    res.json({
      ok: true,
      todos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Profavor hable con el admministrador",
    });
  }
};

module.exports = {
  obtenerTodos,
  crearTodo,
};
