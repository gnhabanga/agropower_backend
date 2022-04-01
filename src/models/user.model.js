var dbConn = require('../../config/db.config');

var User = function(user){
    this.username = user.username;
    this.password = user.password;
}

//verificar user
User.getUsernameData = (username, password, result) => {
    dbConn.query('SELECT * FROM user WHERE username=? and password=?',[username, password], (err, res)=>{
        if (err){
            console.log('Erro de carregamento pelo nome', err);
            result(null, err);
          }else{
            result(null, res);
        }
    });
}

  //get all users
User.getAllUsers = (result) => {
    dbConn.query('SELECT * FROM user', (err, res)=>{
        if (err) {
            console.log('Erro no momento de requesicao', err);
            result(null, err);
        }else{
            console.log('Dados carregados com sucesso');
            result(null, res);
        }
    });
}

//create new producer
User.createUser = (userReqData, result)=>{
    dbConn.query(
        'INSERT INTO user SET ? ', userReqData, (err, res) =>{
            if (err) {
                console.log('Erro inserindo dados');
                result(null, err);
            }else{
                console.log('User criado com sucesso');
                result(null, res);
            }
        }
    );
    }


  module.exports = User;