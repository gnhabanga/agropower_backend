var dbConn = require('../../config/db.config');

var Produtor = function(produtor){
    this.nome = produtor.nome;
    this.nr_id = produtor.nr_id;
    this.tipo_id = produtor.tipo_id;
    this.num_telef = produtor.num_telef;
    this.morada = produtor.morada;
}

//get all producers
Produtor.getAllProducers = (result) => {
    dbConn.query('SELECT * FROM produtor', (err, res)=>{
        if (err) {
            console.log('Erro no momento de requesicao', err);
            result(null, err);
        }else{
            console.log('Dados carregados com sucesso');
            result(null, res);
        }
    });
}

//get producer by name 
Produtor.getProducerByName = (nome, result) => {
  dbConn.query('SELECT * FROM produtor where nome LIKE ?', nome, (err, res)=>{
      if (err){
          console.log('Erro de carregamento pelo nome', err);
          result(null, err);
        }else{
          result(null, res);
      }
  }) 
}

//create new producer
Produtor.createProducer = (producerReqData, result)=>{
dbConn.query(
    'INSERT INTO produtor SET ? ', producerReqData, (err, res) =>{
        if (err) {
            console.log('Erro inserindo dados');
            result(null, err);
        }else{
            console.log('Producer criado com sucesso');
            result(null, res);
        }
    }
);
}

//update producer by id
Produtor.updateProducer = (id, producerReqData, result) => {
    dbConn.query(
        'UPDATE produtor SET nome=?, tipo_id=?, nr_id=?, num_telef=?, morada=? WHERE id=?', [producerReqData.nome, producerReqData.tipo_id, producerReqData.nr_id, producerReqData.num_telef, producerReqData.morada, id],
        (err, res) =>{
            if(err){
                console.log('Erro enquanto actualiza o produtor');
                result(null, err);
            }else{
                console.log('Informacao actualizada com sucesso');
                result(null, res);
            }
        } 
    );
}

Produtor.deleteProducer = (id, result)=>{
    dbConn.query('DELETE FROM produtor WHERE id=?', [id], (err, res)=>{
        if(err){
            console.log('Erro a tentar elminar produtor');
            result(null, err);
        }else{
            result(null, res);
        }
    });
}

module.exports = Produtor;