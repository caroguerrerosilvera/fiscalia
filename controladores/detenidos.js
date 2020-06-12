const detenidoModelo = require('../modelos/Detenido');

async function listar () {
    try {
        const respuesta = await detenidoModelo.listar();
        return respuesta;
    } catch (err) {
        return { status: 'Error', message: err.message }
    }
}

async function buscarPorCedula (cedula) {
    try {
        const respuesta = await detenidoModelo.consultarDetenidoPorCedula(cedula);
        return respuesta;
    } catch (err) {
        return { status: 'Error', message: err.message }
    }
}

async function registrarEntrada (cedula, nombre, apellido, fechaNacimiento, idCelda, idEncargadoSeguridad) {
    if (!cedula || !nombre || !apellido || !fechaNacimiento || !idCelda || !idEncargadoSeguridad) {
        return { status: 'Error', message: 'Por favor rellene todos los campos' }
    }

    try {
        const detenido = await detenidoModelo.consultarDetenidoPorCedula(cedula);
        if (!detenido) {
            await detenidoModelo.registrarDetenido(cedula, nombre, apellido, fechaNacimiento, idCelda);
        }

        const ingreso = await detenidoModelo.registrarEntrada(cedula, idEncargadoSeguridad);
        return ingreso;
    } catch (err) {
        return { status: 'Error', message: err.message }
    }
}

async function registrarSalida (cedula, idEncargadoSeguridad) {
    if (!cedula || !idEncargadoSeguridad) {
        return { status: 'Error', message: 'Por favor rellene todos los campos' }
    }

    try {
        const respuesta = await detenidoModelo.registrarSalida(cedula, idEncargadoSeguridad);
        return respuesta;
    } catch (err) {
        return { status: 'Error', message: err.message }
    }
}

module.exports = {
    buscarPorCedula,
    listar,
    registrarEntrada,
    registrarSalida
};