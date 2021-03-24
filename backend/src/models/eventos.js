/*
CREATE TABLE IF NOT EXISTS `eventos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `fecha` DATETIME NOT NULL,
  `descripcion` VARCHAR(450) NOT NULL,
  `lugar` VARCHAR(450) NULL,
  `organizador_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_eventos_usuarios1_idx` (`organizador_id` ASC) ,
  CONSTRAINT `fk_eventos_usuarios1`
    FOREIGN KEY (`organizador_id`)
    REFERENCES `usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
*/

const { DataTypes } = require ('sequelize');
const sequelize = require ('./../config/db');
const usuarios = require('./usuarios');

const eventos = sequelize.define('eventos',{
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lugar: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

eventos.hasOne(usuarios,{
    foreignKey: 'organizador_id'
});

module.exports = eventos;