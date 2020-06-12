const conexion = require('./conexion');

function autenticar (usuario, contrasena) {
    return new Promise(function(resolve, reject) {
        if (usuario.length === 0 || contrasena.length === 0) {
            return reject({ message: 'Por favor ingresa tu usuario o contrasena' });
        }
    
        if (isNaN(usuario)) {
            return reject({ message: 'Recuerde que el usuario debe ser un valor numerico' });
        }
        
        const query = `SELECT * FROM encargadoseguridad WHERE idEncargadoSeguridad = ${usuario}`;
        conexion.query(query, function (error, results) {
            if (error) return reject(error);
            
            const usuarioData = results[0];

            if (!usuarioData) return reject({ message: 'El usuario no se encuentra registrado' });
            if (usuarioData.contrasena !== contrasena) return reject({ message: 'La contrasena es incorrecta' });

            resolve(usuarioData);
        });
    })
}

module.exports = {
    autenticar
};