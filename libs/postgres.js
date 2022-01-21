// integracion node-postgres
// pg es el driver de node 
// creamos capa de librerias en un dir podemos nombralo libs
// las librerias se encargan de conexion a terceros (como api o base de datos)
// los servicios son logica de negocio 

const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'nico',
    password: 'admin123',
    database: 'my_store'
  });
  await client.connect();
  return client;
}

module.exports = getConnection;



// ahora ya podemos ir a nuestros servicios para utilizar el getConnection