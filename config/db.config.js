const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host: 'us-cdbr-east-04.cleardb.com',
    user: 'b16f6ae51aa4ba',
    password: '8857a4a0',
    database: 'heroku_b4ee7a356d82fe5'
});

dbConn.connect(function(error){
    if(error) throw error;
    console.log('Database conectada');
});

module.exports = dbConn;