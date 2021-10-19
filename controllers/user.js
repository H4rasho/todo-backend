const { response } = require("express");
const bcrypt = require("bcrypt");

const User = require("../models/User");

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

    user = new User(email, password);
    const salt = bcrypt.genSaltSync();

    user.password = bcrypt.hashSync(password, salt);

    const userDB = await user.save();

    res.status(201).json({
      ok: true,
      userDB,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  crearUsuario,
};
