import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  database: "world",
  user: "root",
  password: "password123",
});

export default connection;
