const { Model, DataTypes } = require("sequelize");
const sequelize = require("../connect");

class Bussines extends Model {}

Bussines.init(
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING(60),
      validate: {
        isAlpha: {
          arg: true,
          msg: "solo puede ser letras"
        },
        len: [4, 10]
      },
      defaultValue: "lol",
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING,
      defaultValue: ""
    }
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "Bussines" // We need to choose the model name
  }
);

module.exports = Bussines;
