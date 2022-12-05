var mysql = require('mysql');
require('dotenv').config({path: ('./.env')});
var connection= mysql.createConnection({
    host : process.env.HOST,
    database : process.env.NAME,
    user : process.env.USER,
    password : process.env.PASSWORD,
});

connection.connect(function(err) {
    if (err) {
        console.error('Error de conexion: ' + err.stack);
        return;
    }
    console.log(' *****CONECTADO EN LA BASE DE DATOS***** ' + connection.threadId);
});

module.exports = connection;