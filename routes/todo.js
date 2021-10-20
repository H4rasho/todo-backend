/*
    todo routes
    /api/todo
*/

const { Router } = require("express");
const router = Router();

const {
  obtenerTodos,
  crearTodo,
  actualizarTodo,
} = require("../controllers/todo");

router.get("/", obtenerTodos);
router.post("/", crearTodo);
router.put("/delete/:id", actualizarTodo);

module.exports = router;
