
const ProducerModel = require('../models/produtor.model');

// get all products list
exports.getProdutoresList = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    ProducerModel.getAllProducers((err, produtor) => {
        console.log('localizacao actual');
        if (err)
        
            res.send(err);
        console.log('produtores', produtor);
        res.send(produtor);

    })
}

//get producer by name
exports.getProducerByName = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    ProducerModel.getProducerByName(req.params.name, (err, produtor) => {
        if (err)
            res.send(err);
        console.log('unico dado', produtor);
        res.send(produtor);
    })
}

//update producer by id
exports.updateProducer = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const producerReqData = new ProducerModel(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {
        ProducerModel.updateProducer(req.params.id, producerReqData, (err, produtor) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'Produtor actualizado com sucesso', data: produtor });
        });
    }
}

//create new producer
exports.createProducer = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const producerReqData = new ProducerModel(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {
        ProducerModel.createProducer(producerReqData, (err, produtor) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'Adicionado com sucesso', data: produtor });
        });
    }
}

//delete producer

exports.deleteProducer = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    ProducerModel.deleteProducer(req.params.id, (err, produtor)=>{
        if (err)
        res.send(err);
        res.json({success: true, message: 'Produtor eliminado com sucesso'});
    });
}