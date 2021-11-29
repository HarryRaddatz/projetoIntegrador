const fs = require('fs'),
path = require('path'),
contrlCad = {
    index: (req, res, next) => {
        res.render('cadastro', {
            title: 'Cadastre-se',
            style: 'stylesheet/cadastro.css',
            errors: false
          })
    }, 
    newCadastro: (req, res, next) => {
        const usuariosNew = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'bd', 'usuariosBd.json'), 'utf-8')),
        newUsuario = req.body,
        newID = () => { if(!usuariosNew.length === 0) {usuariosNew[usuariosNew.length - 1].id + 1} else { return 1} };
        newUsuario.criado = new Date();
        newUsuario.id = newID;
        usuariosNew.push(newUsuario);
        fs.writeFileSync(path.join(__dirname, '..', 'bd', 'usuariosBd.json'), JSON.stringify(usuariosNew));
        res.redirect('/');
        }
  
}



module.exports = contrlCad