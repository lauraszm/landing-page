const mariadb = require('mariadb');
const { DB_SERVER, DB_USR, DB_PWD, DB_DATABASENAME, DB_PORT} = process.env

const pool = mariadb.createPool({ // Open a new connection                                                                                                                                           
    host: DB_SERVER, 
    user: DB_USR, 
    password: DB_PWD,
    database : DB_DATABASENAME,
    port:DB_PORT
});

module.exports = {
  getConnection: function() {
    return new Promise(function(resolve, reject) {
      pool.getConnection().then(function(connection) {
          resolve(connection);
        })
        .catch(function(error) {
          reject(error);
        });
    });
  }
};