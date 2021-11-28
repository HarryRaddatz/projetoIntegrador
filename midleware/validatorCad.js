const {check , validationResult, body} = require('express-validator')

cadastroValidator = [
    check('nomeCompleto').isEmpty().withMessage('O nome deve ser preenchido'),
    check('email').isEmpty().withMessage('Deve ser preenchido o e-mail').bail().isEmail().withMessage('Um e-mail deve ser preenchido'),
    check('dateBorn').isEmpty().withMessage('Preencha data de Nascimento').bail().isDate().withMessage('Só serão aceitas datas.'),
    check('senha').custom(x =>{
        let teste = check('confirmSenha').custom(y =>{
            if(x === y){
                return true
            }
        })
        if(teste){
            return teste
        }
    }).withMessage('Suas senhas não são iguais.')
]

module.exports = cadastroValidator