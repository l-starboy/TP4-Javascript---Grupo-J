// database.js

const sqlite3 = require('sqlite3').verbose();

// Conectar a la base de datos SQLite (creará el archivo si no existe)
const db = new sqlite3.Database('./db/i2k24.db', (err) => {
    if (err) {
        console.error('Error al abrir la base de datos', err.message);
    } else {
        console.log('Conectado a la base de datos SQLite');
    }
});

module.exports = db;
