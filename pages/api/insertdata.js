import connection from "../../database/db_connection";

export default function handler(req, res) {
  if (req.body.tableName === "") {
    res.status(500).json({ msg: "no table selected" });
  }
  let columnDataString = ``;
  let columns = ``;
  for (const property in req.body.columnData) {
    columnDataString = columnDataString.concat(
      `'`,
      req.body.columnData[property],
      `', `
    );
    columns = columns.concat(property, `, `);
  }
  columnDataString = columnDataString.slice(0, -2);
  columns = columns.slice(0, -2);

  console.log(columnDataString);
  console.log(columns);

  connection.query(
    `INSERT INTO ${req.body.tableName} (${columns}) VALUES(${columnDataString});`,
    function (err, results, fields) {
      console.log(results);
      console.log(fields);
      console.log(err);
      res.status(201).json({ results, msg: "success" });
    }
  );
}
