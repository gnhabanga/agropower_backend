const router = require('express').Router();

const ProdutoController = require('../controladores/produto.controller');

router.get('/', ProdutoController.getProdutoList);

router.post('/', ProdutoController.createProduto);

router.put('/:id', ProdutoController.updateProduto);

router.delete('/:id', ProdutoController.deleteProduto);

module.exports = router;