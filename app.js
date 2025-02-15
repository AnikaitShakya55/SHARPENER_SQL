const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const db = require("./util/database.js");

const errorController = require("./controllers/error");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// all about DATABASE CONNECTTION WITH SQL
db.database_connection();
db.pool
  .promise()
  .execute("SELECT * FROM products")
  .then((data) => {
    // console.log(data);
  })
  .catch((err) => console.log(err));

//   DATABASE CONNECTION ENDS WITH SQL

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
