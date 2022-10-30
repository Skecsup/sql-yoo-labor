import connection from "../../database/db_connection";

export default function handler(req, res) {
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
      console.log(results); // results contains rows returned by server
      //console.log(fields); // fields contains extra meta data about results, if available
      console.log(err);
      res.status(201).json({ results });
    }
  );
}
