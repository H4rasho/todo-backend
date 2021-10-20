/*
    todo routes
    /api/todo
*/

const { Router } = require("express");
const router = Router();

const { obtenerTodos, crearTodo } = require("../controllers/todo");
const { validarJWT } = require("../middlewares/validar-jwt");

router.use(validarJWT);

router.get("/", obtenerTodos);
router.post("/", crearTodo);

module.exports = router;
