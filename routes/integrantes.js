//IMPORTACIONES
const express = require('express');
const router = express.Router();
const pool = require('../database/database');

//RUTA DE LA PAGINA DE INTEGRANTES
// router.get('/', (req, res) => {
//     res.send("Aquí irá la lista de personas de forma general")
// });

router.get('/', (req, res) => {

    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query('SELECT * FROM integrantes', (error, integrantes, fields) => {
            if (err) {
                res.status(400).json({
                    ok: false,
                    mensaje: 'No se puede realizar la consulta a la base de datos'
                });
            }
            res.status(200).json({
                ok: true,
                integrantes
            });


        });

        //res.send("Aquí veremos la información detallada de cada integrante");
    });

});

//RECIBIR DATOS
router.post('/insertarIntegrantes', (req, res) => {
    const datosPersonas = req.body;

    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query('INSERT INTO integrantes SET ?', datosPersonas, (error, resultadoInsercion, fields) => {
            if (err) throw err;
            res.status(200).json({
                ok: true,
                resultadoInsercion
            });


        });

    });

});


module.exports = router;