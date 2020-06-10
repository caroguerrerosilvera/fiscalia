const conexion = require('./conexion');

function registrarDetenido(cedula, nombre, apellido, fechaNacimiento, idCelda, idEncargadoSeguridad) {
    return new Promise(function(resolve, reject) {  
        const queryDetenido = `INSERT INTO detenido(cedulaDetenido, nombreDetenido, apellidoDetenido, fechaDeNacimiento, idCelda) VALUES (${cedula}, '${nombre}', '${apellido}', '${fechaNacimiento}', ${idCelda})`;
        conexion.query(queryDetenido, function (error) {
            if (error) return reject(error);
            resolve(true);
        });        
    });
}

function consultarDetenidoPorCedula (cedulaDetenido) {
    return new Promise(function(resolve, reject) {  
        const query = `SELECT * FROM detenido WHERE cedulaDetenido = ${cedulaDetenido}`;
        conexion.query(query, function (error, results) {
            if (error) return reject(error);
            resolve(results);
        });        
    });
}

function registrarSalida(cedulaDetenido, idEncargadoSeguridad) {
    return new Promise(function(resolve, reject) {  
        const query = `INSERT INTO registrosalida(idEncargadoSeguridad, cedulaDetenido, horaYFechaSalida) VALUES (${idEncargadoSeguridad},${cedulaDetenido},now())`;
        conexion.query(query, function (error) {
            if (error) return reject(error);
            resolve(true);
        });        
    });
}

function registrarEntrada(cedulaDetenido, idEncargadoSeguridad) {
    return new Promise(function(resolve, reject) {  
        const query = `INSERT INTO registroingreso(idEncargadoSeguridad, cedulaDetenido, horaYFechaSalida) VALUES (${idEncargadoSeguridad},${cedulaDetenido},now())`;
        conexion.query(query, function (error) {
            if (error) return reject(error);
            resolve(true);
        });        
    });
}

function listar() {
    return new Promise(function(resolve, reject) {  
        const query = `SELECT * FROM detenido
            LEFT JOIN registroingreso ON registroingreso.cédulaDetenido = detenido.cedulaDetenido
            LEFT JOIN registrosalida ON registrosalida.cédulaDetenido = detenido.cedulaDetenido
            ORDER BY registroingreso.horaYFechaIngreso;`;
        conexion.query(query, function (error, results) {
            if (error) return reject(error);
            resolve(results);
        });
    })
}

module.exports = {
    consultarDetenidoPorCedula,
    eliminar,
    registrarDetenido,
    listar,
    registrarEntrada,
    registrarSalida
};