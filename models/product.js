const db = require("../util/database.js");

const Cart = require("./cart.js");

module.exports = class Product {
  constructor(
    id = null,
    title = "",
    imageUrl = "",
    description = "",
    price = 0
  ) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.pool
      .promise()
      .execute(
        "INSERT INTO products (title, price, imgURL, description) VALUES (?, ?, ?, ?)",
        [this.title, this.price, this.imageUrl, this.description]
      );
  }

  static deleteById(id) {}

  static fetchAll() {
    return db.pool.promise().execute("SELECT * FROM products");
  }

  static findById(id) {
    return db.pool
      .promise()
      .execute("SELECT * FROM products WHERE products.id = ?", [id]);
  }
};
