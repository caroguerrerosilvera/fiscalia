const conexion = require('./conexion');

function registrarDesplazamiento(encargadoSeguridad, cedula, lugar, desplazamiento) {
    return new Promise(function(resolve, reject) {  
        const queryDesplazamiento = `INSERT INTO registrodesplazamiento(idEncargadoSeguridad, cedulaDetenido, idLugar, tipoDesplazamiento, horaYFechaDesplazamiento) VALUES (${encargadoSeguridad}, ${cedula}, ${lugar}, '${desplazamiento}', now())`;
        conexion.query(queryDesplazamiento, function (error) {
            if (error) return reject(error);
            resolve(true);
        });        
    });
}

function registrarLugar(nombre, ubicacion) {
    return new Promise(function(resolve, reject) {  
        const queryDetenido = `INSERT INTO detenido(nombreLugar, ubicaciónLugar) VALUES ('${nombre}', '${ubicacion}')`;
        conexion.query(queryDetenido, function (error) {
            if (error) return reject(error);
            resolve(true);
        });        
    });
}