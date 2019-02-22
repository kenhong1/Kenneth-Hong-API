'use strict';
module.exports = (sequelize, DataTypes) => {
  const cars = sequelize.define('cars', {
    brand: DataTypes.STRING,
    model: DataTypes.STRING,
    year: DataTypes.INTEGER
  }, {});
  cars.associate = function(models) {
    // associations can be defined here
  };
  return cars;
};