var dbConn = require('../../config/db.config');

var Regiao = function(regiao){
    this.nome = regiao.nome;
    this.num_regiao = regiao.num_regiao;
    this.detalhes_regiao = regiao.detalhes_regiao;
}

  //get all regioes
  Regiao.getAllRegioes = (result) => {
    dbConn.query('SELECT * FROM regiao', (err, res)=>{
        if (err) {
            console.log('Erro no momento de requesicao', err);
            result(null, err);
        }else{
            console.log('Dados carregados com sucesso');
            result(null, res);
        }
    });
}


module.exports = Regiao;