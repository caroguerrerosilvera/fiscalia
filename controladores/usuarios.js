const usuarioModelo = require('../modelos/EncargadoSeguridad');

async function autenticar (usuario, contrasena) {
    try {
        const respuesta = await usuarioModelo.autenticar(usuario, contrasena);
        return respuesta;
    } catch (err) {
        return { status: 'Error', message: err.message }
    }
}

module.exports = { autenticar };
