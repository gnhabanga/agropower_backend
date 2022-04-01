const router = require('express').Router();

const UserController = require('../controladores/user.controller');

router.get('/:username/log/:password', UserController.getUsernameData);

router.get('/', UserController.getUsersList);

router.post('/', UserController.createUser);

module.exports = router;