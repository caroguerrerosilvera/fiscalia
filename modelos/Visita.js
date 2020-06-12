const conexion = require('./conexion');

function registrarVisita(cedula, nombre, apellido, fechaNacimiento, idCelda) {
    return new Promise(function(resolve, reject) {  
        const queryDetenido = `INSERT INTO detenido(cedulaDetenido, nombreDetenido, apellidoDetenido, fechaDeNacimiento, idCelda) VALUES (${cedula}, '${nombre}', '${apellido}', '${fechaNacimiento}', ${idCelda})`;
        conexion.query(queryDetenido, function (error) {
            if (error) return reject(error);
            resolve(true);
        });        
    });
}

function registrarDatosVisitante(cedula, nombre, apellido, fechaNacimiento, idCelda) {
    return new Promise(function(resolve, reject) {  
        const queryDetenido = `INSERT INTO detenido(cedulaDetenido, nombreDetenido, apellidoDetenido, fechaDeNacimiento, idCelda) VALUES (${cedula}, '${nombre}', '${apellido}', '${fechaNacimiento}', ${idCelda})`;
        conexion.query(queryDetenido, function (error) {
            if (error) return reject(error);
            resolve(true);
        });        
    });
}

function buscarPorCedula(cedula) {
    return new Promise(function(resolve, reject) {  
        const query = `SELECT * FROM visitante WHERE cedulaVisitante = ${cedula}`;
        conexion.query(query, function (error, results) {
            if (error) return reject(error);
            resolve(results[0]);
        });        
    });
}

function terminar() {
    
}

function listar() {
    
}

module.exports = {
    buscarPorCedula,
    registrarVisita,
    registrarDatosVisitante,
    listar,
    terminar
};