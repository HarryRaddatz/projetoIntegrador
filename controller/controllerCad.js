const fs = require("fs"),
  path = require("path"),
  bdCRUD = require("../bd/index"),
  contrlCad = {
    index: (req, res, next) => {
      res.render("cadastro", {
        title: "Cadastre-se",
        style: "stylesheet/cadastro.css",
        errors: false,
      });
    },
    newCadastro: async (req, res, next) => {
      await bdCRUD.create(req.body)

      await res.redirect("/");
    },
  };

module.exports = contrlCad;
