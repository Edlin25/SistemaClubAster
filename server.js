//IMPORTACIONES

const express = require('express');
const morgan = require('morgan');
const server = express();


//SETTINGS 
server.set('Sistema Club Aster', 'Aplicacion API REST');
server.set('port', 5001);



//MIDDLEWARE
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(morgan('dev'));
server.use(express.static('public'));

server.use('/inicio', require('./routes/inicio'));
server.use('/integrantes', require('./routes/integrantes'));
server.use('/movimientos', require('./routes/movimientos'));
server.use('/reuniones', require('./routes/reuniones'));



server.listen(server.get('port'), () => {
    console.log(`Servidor corriendo en el puerto ${server.get('port')}`);
})