const conexion = require('./conexion');

function listar () {
    return new Promise(function(resolve, reject) {  
        const query = `SELECT * FROM celda`;
        conexion.query(query, function (error, results) {
            if (error) return reject(error);
            resolve(results);
        });        
    });
}

module.exports = {
    listar
};