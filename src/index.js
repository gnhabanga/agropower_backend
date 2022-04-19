console.log('Configurando Backend...');

const express = require("express");
const cors = require("cors");
const app = express();
require('dotenv').config();
const bodyParser = require("body-parser");

const protocolo = process.env.PROTOCOL || "https";
const ip = require("ip").address();
const port = process.env.PORT || 9002;

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

//importacao das rotas
const produtoresRoutes = require('./routes/produtores.route');
const userRoutes = require('./routes/user.route');
const produtoRoutes = require('./routes/produto.route');
const regiaoRoutes = require('./routes/regiao.route');

app.use('/api/v1/produtores', produtoresRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/produto', produtoRoutes);
app.use('/api/v1/regiao', regiaoRoutes);

app.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send('Hello World');
});






app.listen(port, () => console.log(
    'Servidor iniciado em http://localhost:' + port + ' or ' + protocolo + `://${ip}:${port}`
));
