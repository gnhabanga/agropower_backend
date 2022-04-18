const UserModel = require('../models/user.model');

//get user by username and password
exports.getUsernameData = (req, res) => {

    UserModel.getUsernameData(req.params.username,req.params.password, (err, user) => {
        if (err)
            res.send(err);
        res.header("Access-Control-Allow-Origin", "*");
        res.send(user);
    });
}

// get all products list
exports.getUsersList = (req, res) => {
    UserModel.getAllUsers((err, user) => {
        console.log('localizacao actual');
        if (err)
            res.send(err);
        console.log('users', user);
        res.header("Access-Control-Allow-Origin", "*");
        res.send(user);

    })
}

//create new user
exports.createUser = (req, res) => {
    const UserReqData = new UserModel(req.body);
    res.header("Access-Control-Allow-Origin", "*");
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {
        UserModel.createUser(UserReqData, (err, user) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'Adicionado com sucesso', data: user });
        });
    }
}
