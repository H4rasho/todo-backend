/*
    todo routes
    /api/user
*/

const { Router } = require("express");
const router = Router();

const { crearUsuario } = require("../controllers/user");

router.post("/", crearUsuario);

module.exports = router;
