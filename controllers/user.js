const { response } = require("express");
const bcrypt = require("bcrypt");

const User = require("../models/User");
const { generarJWT } = require("../helpers/jwt");

const crearUsuario = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        ok: false,

        msg: "Ya existe el usuario ingresado",
      });
    }

    user = new User(req.body);
    const salt = bcrypt.genSaltSync();

    user.password = bcrypt.hashSync(password, salt);

    const userDB = await user.save();
    // generar token
    const token = await generarJWT(userDB.id, userDB.name);

    res.status(201).json({
      ok: true,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Porfavor hable con el administrador",
    });
  }
};

const ingresarUsuario = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    const usuario = await User.findOne({ email });
    if (!usuario) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario no existe con ese email",
      });
    }
    const validarContraseña = bcrypt.compareSync(password, usuario.password);
    if (!validarContraseña) {
      return res.status(401).json({
        ok: false,
        msg: "contrseña incorrecta",
      });
    }

    const token = await generarJWT(usuario.id, usuario.name);

    res.json({
      ok: true,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Porfavor hable con el administrador",
    });
  }
};

module.exports = {
  crearUsuario,
  ingresarUsuario,
};
