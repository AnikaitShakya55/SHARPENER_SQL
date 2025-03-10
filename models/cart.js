const dataTypes = require("sequelize");

const sequelize = require("../util/database");

const Cart = sequelize.define("cart", {
  id: {
    type: dataTypes.INTEGER,
    autoIncrement: true,
    autoNull: false,
    primaryKey: true,
  },
});

module.exports = Cart;
