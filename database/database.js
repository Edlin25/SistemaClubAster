const mysql = require('mysql');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'sistemaclubaster'
});

pool.getConnection((err, connection) => {
    if (err) throw err;

    console.log('Base de datos conectada')
});

module.exports = pool;