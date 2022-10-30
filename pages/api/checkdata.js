import connection from "../../database/db_connection";

export default function handler(req, res) {
  console.log(req.body);
  connection.query(
    `SELECT *
FROM (${req.body.query}) as w1
WHERE NOT EXISTS(SELECT ${req.body.priKey}
FROM (${req.body.solution}) as w2
WHERE w1.${req.body.priKey} = w2.${req.body.priKey});`,
    function (err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
      res.status(200).json({ results });
    }
  );
}
