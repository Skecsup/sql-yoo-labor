import connection from "../../database/db_connection";

export default function handler(req, res) {
  console.log(req.body);
  connection.query(
    `insert into tasks (TaskDescription, Task, Title, Solution, BelongsTo) values( '${req.body.TaskDescription}', '${req.body.Task}', '${req.body.Title}', '${req.body.Solution}', '${req.body.BelongsTo}');`,
    function (err, results, fields) {
      //console.log(results); // results contains rows returned by server
      //console.log(fields); // fields contains extra meta data about results, if available
      res.status(200).json({ msg: "success" });
    }
  );
}
