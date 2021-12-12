const express = require('express'),
router = express.Router(),
contrlCad = require('../controller/controllerCad')


/* GET users listing. */
router.get('/', contrlCad.index);

router.post('/', contrlCad.newCadastro);

module.exports = router;
