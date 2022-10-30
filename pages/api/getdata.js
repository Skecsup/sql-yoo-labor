import connection from "../../database/db_connection";

export default function handler(req, res) {
  connection.query(req.body.query, function (err, results, fields) {
    //console.log(results); // results contains rows returned by server
    //console.log(fields); // fields contains extra meta data about results, if available

    if (err) {
      res.status(500).json({ err });
    } else {
      res.status(200).json({ results });
    }
  });
}
