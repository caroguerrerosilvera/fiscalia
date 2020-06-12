const visitaModelo = require('../modelos/Visita');

async function registrar () {
    try {
        const respuesta = await visitaModelo.registrar();
        return respuesta;
    } catch (err) {
        return { status: 'Error', message: err.message }
    }
}

async function terminar () {
    try {
        const respuesta = await visitaModelo.terminar();
        return respuesta;
    } catch (err) {
        return { status: 'Error', message: err.message }
    }
}

async function listar () {
    try {
        const respuesta = await visitaModelo.listar();
        return respuesta;
    } catch (err) {
        return { status: 'Error', message: err.message }
    }
}

async function buscarPorCedula (cedula) {
    try {
        const respuesta = await visitaModelo.buscarPorCedula(cedula);
        return respuesta;
    } catch (err) {
        return { status: 'Error', message: err.message }
    }
}

module.exports = {
    buscarPorCedula,
    listar,
    registrar,
    terminar
};