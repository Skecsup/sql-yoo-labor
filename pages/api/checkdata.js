import connection from "../../database/db_connection";

export default function handler(req, res) {
  console.log(req.body);
  connection.query(
    `SELECT *
FROM (${req.body.query}) as w1
WHERE NOT EXISTS(SELECT name
FROM (${req.body.solution}) as w2
WHERE w1.name = w2.name);`,
    function (err, results, fields) {
      console.log(results); // results contains rows returned by server
      //console.log(fields); // fields contains extra meta data about results, if available
      res.status(200).json({ results });
    }
  );
}
