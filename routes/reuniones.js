//IMPORTACIONES
const express = require('express');
const router = express.Router();

//RUTA DE LA PAGINA DE REUNIONES
router.get('/', (req, res) => {
    S
    res.send("Aquí veremos la lista general de las reuniones");
});

router.get('/detalleReuniones', (req, res) => {
    res.send('Aquì veremos lainformación detallada de las reuniones');
});

module.exports = router;