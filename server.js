// server.js

const express = require('express');
const path = require('path');
const db = require('./database'); // Importa la conexión a la base de datos SQLite
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); // Middleware para parsear datos de formulario

// Ruta para manejar la solicitud POST desde el formulario de registro
app.post('/register', (req, res) => {
    const { nombre_completo, correo_electronico, contrasena } = req.body;

    // Insertar datos en la tabla 'usuario' de la base de datos
    db.run('INSERT INTO usuario (nombre_completo, correo_electronico, contrasena) VALUES (?, ?, ?)',
        [nombre_completo, correo_electronico, contrasena],
        function(err) {
            if (err) {
                return console.error('Error al insertar datos:', err.message);
            }
            console.log(`Nuevo registro insertado con ID: ${this.lastID}`);
            // Redirigir al usuario a una página nueva después de registrar
            res.redirect('/registro_exitoso.html');
        }
    );
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
