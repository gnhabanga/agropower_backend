var dbConn = require('../../config/db.config');

var Produto = function (produto) {
    this.descricao = produto.descricao;
    this.prazo_validade = produto.prazo_validade;
    this.preco = produto.preco;
    this.categoria = produto.categoria;
}

//get all users
Produto.getAllProduto = (result) => {
    dbConn.query('SELECT * FROM produto', (err, res) => {
        if (err) {
            console.log('Erro no momento de requesicao', err);
            result(null, err);
        } else {
            console.log('Dados carregados com sucesso');
            result(null, res);
        }
    });
}

//create new producer
Produto.createProduto = (produtoReqData, result) => {
    dbConn.query(
        'INSERT INTO produto SET ? ', produtoReqData, (err, res) => {
            if (err) {
                console.log('Erro inserindo dados');
                result(null, err);
            } else {
                console.log('Produto adicionado com sucesso');
                result(null, res);
            }
        }
    );
}

//update produto by id
Produto.updateProduto = (id, produtoReqData, result) => {
    dbConn.query(
        'UPDATE produto SET descricao=?, prazo_validade=?, preco=?, categoria=?, id_produtor=?, id_regiao=? WHERE id=?', [produtoReqData.descricao, produtoReqData.prazo_validade, produtoReqData.preco, produtoReqData.categoria, produtoReqData.id_produtor, produtoReqData.id_regiao , id],
        (err, res) => {
            if (err) {
                console.log('Erro enquanto actualiza o produto');
                result(null, err);
            } else {
                console.log('Informacao actualizada com sucesso');
                result(null, res);
            }
        }
    );
}

Produto.deleteProduto = (id, result)=>{
    dbConn.query('DELETE FROM produto WHERE id=?', [id], (err, res)=>{
        if(err){
            console.log('Erro a tentar elminar produto');
            result(null, err);
        }else{
            result(null, res);
        }
    });
}

module.exports = Produto;