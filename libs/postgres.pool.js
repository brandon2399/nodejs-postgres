
//Un pool de conexiones es un conjunto limitado de conexiones a una base de datos, que es manejado por un servidor de aplicaciones de forma tal, que dichas conexiones pueden ser reutilizadas por los diferentes usuarios.

const { Pool } = require('pg');

const {config } = require('./../config/config');

const USER = encodeURIComponent(config.dbUsers);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;


const pool = new Pool({ connectionString: URI });
    
  
  
module.exports = pool;



