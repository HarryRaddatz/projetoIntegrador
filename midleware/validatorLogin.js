const { body, validationResult } = require("express-validator"),
fs = require('fs'),

  validatorLogin = {
    index:[
      body('email').isEmail().withMessage('Preencher email válido')
    ],
    next: (req, res, next) => {
      let errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.log(errors);
        res.errors = errors;
        res.redirect("/");
      } else {
        let {email, senha} = req.body,
        bd = JSON.parse(fs.readFileSync('../bd/usuariosBd.json'), 'utf-8')
        bd = bd.filter(x => email === x.email)
        if(bd.senha === senha){
        next()
      } else {
        res.redirect('/')
      };
      }
    }
};

  module.exports = validatorLogin
