const detenidoModelo = require('../modelos/Detenido');

async function listar () {
    try {
        const respuesta = await detenidoModelo.listar();
        return respuesta;
    } catch (err) {
        return { status: 'Error', message: err.message }
    }
}

module.exports = {
    listar, 
};