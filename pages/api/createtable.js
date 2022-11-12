import connection from "../../database/db_connection";

export default function handler(req, res) {
  console.log(req.body.query);

  const condition = req.body.query.toUpperCase().startsWith("CREATE TABLE");
  let secureQuery = "";

  if (!condition) {
    res.status(500).json({ msg: "Not a create operation" });
  } else {
    secureQuery = req.body.query.toUpperCase().replace("CREATE TABLE", "");
  }
  console.log(secureQuery);

  connection.query(
    `CREATE TABLE${secureQuery}`,
    function (err, results, fields) {
      console.log(results);
      console.log(fields);
      console.log(err);
      if (err) {
        res.status(500).json({ msg: err.message });
      } else {
        res.status(201).json({ msg: "success" });
      }
    }
  );
}
