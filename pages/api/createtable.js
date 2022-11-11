import connection from "../../database/db_connection";

export default function handler(req, res) {
  console.log(req.body.query);
  const indexOfParenthesis = req.body.query.lastIndexOf("CREATE TABLE");
  console.log(indexOfParenthesis);
  const condition = req.body.query.toUpperCase().startsWith("CREATE TABLE");
  let secureQuery = "";

  if (!condition) {
    res.status(500).json({ msg: "Not a create operation" });
  } else {
    secureQuery = req.body.query.replace("CREATE TABLE", "");
  }
  console.log(secureQuery);

  connection.query(
    `CREATE TABLE${secureQuery}`,
    function (err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
      console.log(err);
      if (err) {
        res.status(500).json({ msg: err.message });
      } else {
        res.status(201).json({ msg: "success" });
      }
    }
  );
}
