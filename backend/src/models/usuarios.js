const { DataTypes } = require ('sequelize');
const sequelize = require ('./../config/db');
const eventos = require('./eventos');

const usuarios = sequelize.define('usuarios', {
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false 
    }
});

usuarios.belongsTo(eventos);

module.exports = usuarios;
