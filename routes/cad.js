const express = require('express'),
router = express.Router(), 
contrlCad = require('../controller/controllerCad'),
validatorCad = require('../midleware/validatorCad');



/* GET users listing. */
router.get('/', contrlCad.index);

router.post('/', validatorCad.infos, validatorCad.next,contrlCad.newCadastro);

module.exports = router;
