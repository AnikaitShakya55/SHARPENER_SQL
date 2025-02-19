// database connection using sequelize
const Sequelize = require("sequelize");
const sequelize = new Sequelize("mysql_database", "root", "Bhhuma@2000", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;

// END

// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "mysql_database",
//   password: "Bhhuma@2000",
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });

// const database_connection = () => {
//   pool.getConnection((err, connection) => {
//     if (err) {
//       console.error("DATABASE CONNECTION ERROR:", err.message);
//       return;
//     }
//     console.log("SQL DATABASE CONNECTED !!");
//     connection.release();
//   });
// };

// module.exports = { pool, database_connection };
