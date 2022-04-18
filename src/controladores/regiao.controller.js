const RegiaoModel = require('../models/regiao.model');

exports.getRegiaoModel = (req, res) => {
    RegiaoModel.getAllRegioes((err, regiao) => {
        console.log('localizacao actual');
        if (err)
            res.header("Access-Control-Allow-Origin", "*");
            res.send(err);
        console.log('regioes', regiao);
        res.header("Access-Control-Allow-Origin", "*");
        res.send(regiao);

    });
}
