import connection from "../../database/db_connection";

export default function handler(req, res) {
  console.log(req.body);
  connection.query(`${req.body.query}`, function (err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
    console.log(err);
    if (err) {
      res.status(500).json({ msg: err.message });
    } else {
      res.status(201).json({ msg: "success" });
    }
  });
}
