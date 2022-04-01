const router = require('express').Router();

const ProdutorController = require('../controladores/produtores.controller');


//get all producers
router.get('/', ProdutorController.getProdutoresList);

router.get('/:name', ProdutorController.getProducerByName);

router.post('/', ProdutorController.createProducer);

router.put('/:id', ProdutorController.updateProducer);

router.delete('/:id', ProdutorController.deleteProducer);

module.exports = router;
