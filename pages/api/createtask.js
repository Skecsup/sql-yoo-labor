import connection from "../../database/db_connection";

export default function handler(req, res) {
  console.log(req.body);
  connection.query(
    `INSERT INTO tasks (TaskDescription, Task, Title, Solution, BelongsTo) VALUES(?,?,?,?,?);`,
    [
      req.body.TaskDescription,
      req.body.Task,
      req.body.Title,
      req.body.Solution,
      req.body.BelongsTo,
    ],
    function (err, results, fields) {
      console.log(results); // results contains rows returned by server
      //console.log(fields); // fields contains extra meta data about results, if available
      console.log(err);
      res.status(201).json({ results });
    }
  );
}
