const { body, validationResult } = require("express-validator"),
  validatorCad = {
    infos:[
        body("nomeCompleto")
          .isLength({ min: 3 })
          .withMessage("Nome deve ter mais de 3 caracteres.")
          .bail(),
        body("email")
          .isEmail()
          .withMessage("Deve preencher um e-mail válido.")
          .bail(),
        body("dateBorn")
          .isDate()
          .withMessage("Preencha uma data de nascimento válida.")
          .bail(),
        body("nickname")
          .isLength({ min: 3 })
          .withMessage("Nickname deve ter mais de 3 caracteres.")
          .bail(),
        body("senha")
          .isLength({ min: 8 })
          .withMessage("Deve conter mais de 8 caracteres.")
          .bail(),
        body("confirmSenha")
          .custom((x) => {
            let teste = body("senha").custom((y) => {
              if (x === y) {
                return true;
              } else {
                return false;
              }
            });
            return teste;
          })
          .withMessage("Senhas não conferem.")
          .bail(),
      ],
    next: (req, res, next) => {
      let errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.log(errors);
        res.errors = errors;
        res.redirect("/cadastro");
      } else {
        next();
      }
    },
  };

  module.exports = validatorCad
