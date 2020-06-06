const mysql = require('mysql');

// Tener en cuenta que los datos de conexion
// deben corresponder a la base de datos en el entorno local
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fiscalia'
});
  
con.connect((err) => {
    if(err){
        console.log('Error conectando a la BD');
        return;
    }
    console.log('Conexion a la BD establecida');
});

con.end((err) => {
    console.log(err);
});

module.exports = con;