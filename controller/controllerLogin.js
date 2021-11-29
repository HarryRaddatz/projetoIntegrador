const fs = require('fs'),

contrlLogin = {
    index : (req, res, next) => {
        res.status(404).send('Essa página não foi encontrada.')
    },
    logado: (req, res, next) => {
        res.render('profileLog')
    }
}
module.exports = contrlLogin