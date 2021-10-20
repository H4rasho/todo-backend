/*
    todo routes
    /api/user
*/

const { Router } = require("express");
const router = Router();

const { crearUsuario, ingresarUsuario } = require("../controllers/user");

router.post("/", ingresarUsuario);
router.post("/new", crearUsuario);

module.exports = router;
