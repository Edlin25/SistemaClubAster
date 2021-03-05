const express = require('express');
const router = express.Router();

//RUTA DE LA PAGINA DE INICIO
router.get('/inicio', (req, res) => {
    res.send("Estas en la página de inicio");
});

module.exports = router;