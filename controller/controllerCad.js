const fs = require('fs'),

contrlCad = {
    index: (req, res, next) => {
        res.render('cadastro', {
            title: 'Cadastre-se',
            style: 'stylesheet/cadastro.css'
          })
    }, 
    newCadastro: (req, res, next) => {
        let { nomeCompleto, nickname, email, senha, confirmSenha, dateBorn } = req.body
        console.log(`Olá! ${nomeCompleto}, vulgo:${nickname}`)
        res.redirect('/')
    }

}


module.exports = contrlCad