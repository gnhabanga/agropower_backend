const router = require('express').Router();

const RegiaoController = require('../controladores/regiao.controller');

router.get('/', RegiaoController.getRegiaoModel);

module.exports = router;