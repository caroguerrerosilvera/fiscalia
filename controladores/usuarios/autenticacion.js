const usuarioModelo = require('../../modelos/EncargadoSeguridad');

function autenticar (usuario, contrasena) {
    const respuesta = usuarioModelo.autenticar(usuario, contrasena);
    console.log('respuesta', respuesta);
}

module.exports = { autenticar };
