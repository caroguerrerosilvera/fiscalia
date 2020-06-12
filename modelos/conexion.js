const mysql = require('mysql');

// Los datos de conexion deben corresponder a la base de datos que queramos conectar
const con = mysql.createConnection({
    host: '142.93.5.7',
    user: 'maya',
    password: 'EquipoAlfaDinamitaLobo1234k',
    database: 'fiscalia'
});

con.connect((err) => {
    if(err){
        console.log('Error conectando a la BD');
        return;
    }
    console.log('Conexion a la BD establecida');
});

module.exports = con;