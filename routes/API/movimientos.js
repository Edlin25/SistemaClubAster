//IMPORTACIONES
const express = require('express');
const router = express.Router();

//RUTA DE LA PAGINA DE MOVIMIENTOS
router.get('/', (req, res) => {
    res.send("Aquí irá la lista de movimientos de forma general")
});

router.get('/detalleMovimientos', (req, res) => {
    res.send("Aquì veremos la información detallada de cada uno de los movimientos");
});

module.exports = router;