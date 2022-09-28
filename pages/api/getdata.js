import mysql from "mysql2";

export default function handler(req, res) {
  console.log(req.body.query);
  const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    database: "world",
    user: "root",
    password: "password123",
  });
  connection.query(req.body.query, function (err, results, fields) {
    console.log(results); // results contains rows returned by server
    //console.log(fields); // fields contains extra meta data about results, if available
    res.status(200).json({ results });
  });
}
