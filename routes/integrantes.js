//IMPORTACIONES
const express = require('express');
const router = express.Router();
const pool = require('../database/database');

//RUTA DE LA PAGINA DE INTEGRANTES
router.get('/', (req, res) => {
    res.send("Aquí irá la lista de personas de forma general")
});

router.get('/detalleIntegrantes', (req, res) => {

    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query('SELECT * FROM integrantes', (error, result, fields) => {
            if (err) {
                res.status(400).json({
                    ok: false,
                    mensaje: 'No se puede realizar la consulta a la base de datos'
                });
            }
            res.status(200).json({
                ok: true,
                datosbd: result
            });


        });

        //res.send("Aquí veremos la información detallada de cada integrante");
    });

});

//RECIBIR DATOS
router.post('/', (req, res) => {
    const datosPersonas = req.body;
    const mensaje2 = req.body.otroMensaje;
    res.status(201).json({
        ok: true,
        mensaje: "La información llegó correctamente",
        datosPersonas,
        mensajeAlterno: mensaje2
    });
});


module.exports = router;