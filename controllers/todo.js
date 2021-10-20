const { response } = require("express");
const Todo = require("../models/Todo");

const crearTodo = async (req, res) => {
  const todo = new Todo(req.body);

  try {
    todo.vigencia = true;
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
  try {
    const todos = await Todo.find({ vigencia: true });
    if (!todos) {
      return res.status(404).json({
        ok: false,
        msg: "no existen todos",
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

const actualizarTodo = async (req, res = response) => {
  const todoId = req.params.id;

  try {
    const todo = Todo.findById(todoId);
    if (!todo) {
      return res.status({
        ok: false,
        msg: "Todo no existe por ese id",
      });
    }

    const newTodo = {
      description: todo.description,
      vigencia: false,
    };

    const todoUpdated = await Todo.findByIdAndUpdate(todoId, newTodo, {
      new: true,
    });

    res.json({
      ok: true,
      todo: todoUpdated,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: "false",
      msg: "Porfavor hable con el admministrador",
    });
  }
};

module.exports = {
  obtenerTodos,
  crearTodo,
  actualizarTodo,
};
