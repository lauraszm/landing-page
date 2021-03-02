const express = require('express');
const app = express();
app.use(express.json())


app.listen(3000, () => {
    console.log("El server esta corriendo en el puerto 3000")
})