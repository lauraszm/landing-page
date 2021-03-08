const express = require('express');
const helmet = require("helmet");
const db = require('./js/database/Connection');


const app = express();
app.use(express.json())

app.use(helmet());//agrego middleware de seguridad

var distDir = __dirname + "/";
app.use(express.static(distDir));

app.get('/', (req, res) => {
    res.sendFile(distDir + '/pages/index.html');
});

app.get('/pages/acceso-usuarios.html', (req, res) => {
    res.sendFile(distDir + '/pages/acceso-usuarios.html');
});



app.listen(3001, () => {
    console.log("El server esta corriendo en el puerto 3001")
})


const findUsers = function(connection) {
  return new Promise(function(resolve, reject) {
    connection.query('select * from users').then(function(results) {
      resolve(results[0]);
      })
      .catch(function(error) {
        reject(error);
      });
  });
};


db.getConnection().then(function(connection) {
  findUsers(connection)
  .then(function(result) {   
    console.log(result);
  });
});
