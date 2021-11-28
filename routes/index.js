var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { style: '../../public/assets/styles/loginNSing.css',
    title: 'Projeto Integrador',
    style: 'stylesheet/home.css'
})
});


module.exports = router;
