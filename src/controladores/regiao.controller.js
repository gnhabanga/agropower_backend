const RegiaoModel = require('../models/regiao.model');

exports.getRegiaoModel = (req, res) => {
    RegiaoModel.getAllRegioes((err, regiao) => {
        console.log('localizacao actual');
        if (err)
            res.send(err);
        console.log('regioes', regiao);
        res.send(regiao);

    });
}