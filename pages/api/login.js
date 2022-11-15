import connection from "../../database/db_connection";

export default function handler(req, res) {
  connection.query(
    `select * from users where name=(?) AND password=(?)`,
    [req.body.name, req.body.password],
    function (err, results, fields) {
      if (results.length > 0) {
        console.log("success");
        res.status(200).json({ route: "/welcome" });
      } else {
        console.log("wrong username or password");
        res.status(401).json({ route: "/" });
      }
      console.log(results); // results contains rows returned by server
      //console.log(fields); // fields contains extra meta data about results, if available
    }
  );
}
