const express = require('express'),
router = express.Router(),
contrlLogin = require('../controller/controllerLogin'),
validatorLogin = require('../midleware/validatorLogin')


/* GET users listing. */
router.get('/', contrlLogin.index);
router.post('/',validatorLogin.index, validatorLogin.next, contrlLogin.logado);


module.exports = router;
