'use strict';
module.exports = function(sequelize, DataTypes) {
  var FortuneTeller = sequelize.define('FortuneTeller', {
    task: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return FortuneTeller;
};