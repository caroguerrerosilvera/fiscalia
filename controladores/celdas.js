const celdaModelo = require('../modelos/Celda');

async function listar () {
    try {
        const respuesta = await celdaModelo.listar();
        return respuesta;
    } catch (err) {
        return { status: 'Error', message: err.message }
    }
}

module.exports = { listar };
