var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('cadastro', {
    title: 'aba de cadastro',
    style: 'stylesheet/cadastro.css'
  })
});

module.exports = router;
