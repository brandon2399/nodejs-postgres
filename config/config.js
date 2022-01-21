// configuracion base para variables de entorno de la base
//process.env para leer variables de entorno en node
// se requiere uso de libreria npm i dotenv

require('dotenv').config();

const config = {
    env: process.env.NODE_ENV || 'dev',  
    port: process.env.PORT || 3000,
    dbUsers: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbPort: process.env.DB_PORT,

}

module.exports = {config};