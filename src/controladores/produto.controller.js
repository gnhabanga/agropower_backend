const ProdutoModel = require('../models/produto.model');

exports.getProdutoList = (req, res) => {
    ProdutoModel.getAllProduto((err, produto) => {
        res.header("Access-Control-Allow-Origin", "*");
        console.log('localizacao actual');
        if (err)
            res.send(err);
        console.log('users', produto);
        res.send(produto);

    });
}

//create new produto
exports.createProduto = (req, res) => {
    const produtoReqData = new ProdutoModel(req.body);
    res.header("Access-Control-Allow-Origin", "*");
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {
        ProdutoModel.createProduto(produtoReqData, (err, produto) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'Adicionado com sucesso', data: produto });
        });
    }
}

//update produto by id
exports.updateProduto = (req, res) => {
    const produtoReqData = new ProdutoModel(req.body);
    res.header("Access-Control-Allow-Origin", "*");
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {
        ProdutoModel.updateProduto(req.params.id, produtoReqData, (err, produto) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'Produto actualizado com sucesso', data: produto });
        });
    }
}

//delete produto
exports.deleteProduto = (req, res) => {
    ProdutoModel.deleteProduto(req.params.id, (err, produto)=>{
        if (err)
        res.header("Access-Control-Allow-Origin", "*");
        res.send(err);
        res.json({success: true, message: 'Produto eliminado com sucesso'});
    });
}
