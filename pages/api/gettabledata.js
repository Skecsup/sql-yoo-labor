import connection from "../../database/db_connection";

export default function handler(req, res) {
  connection.query(
    `show columns from ${req.body.tableName};`,
    function (err, results, fields) {
      //console.log(results); // results contains rows returned by server
      //console.log(fields); // fields contains extra meta data about results, if available
      res.status(200).json({ results });
    }
  );
}
