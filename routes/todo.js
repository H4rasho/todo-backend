/*
    todo routes
    /api/todo
*/

const { Router } = require("express");
const router = Router();

const { obtenerTodos } = require("../controllers/todo");

router.get("/", obtenerTodos);

module.exports = router;
