const express = require('express');
const morgan = require('morgan');
const app = express();
var cors = require("cors");
const database = require("./modulos/dbconect");

// settings
app.set('port', process.env.PORT || 3003);

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());



// PRUEBAS
app.use('/apifactura', require('./src/ApiPedidos/Factura'));


// USUARIOS
app.use('/apinuevopedido', require('./src/ApiPedidos/Nuevopedido'));
app.use('/apiclicarrito', require('./src/ApiPedidos/Clicarrito'));
app.use('/apiverpedidos', require('./src/ApiPedidos/Clipedido'));
app.use('/apiinfopedido', require('./src/ApiPedidos/Cliinfopedido'));

// ADMINISTRADOR
app.use('/apipedidos', require('./src/ApiPedidos/Crudpedidos'));
app.use('/apiadminproducto', require('./src/ApiPedidos/Adminpedido')); //ApiAdminProducto hace referencia a pedidos


// starting the serve
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
