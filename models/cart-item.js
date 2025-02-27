const dataTypes = require("sequelize");

const sequelize = require("../util/database");

const CartItem = sequelize.define("cartItem", {
  id: {
    type: dataTypes.INTEGER,
    autoIncrement: true,
    autoNull: false,
    primaryKey: true,
  },
  quantity: dataTypes.INTEGER,
});

module.exports = CartItem;
