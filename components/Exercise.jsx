import { useState, useEffect } from "react";
import { Exercise_style } from "../styles/Exercise.style";

const Exercise = ({
  title,
  serial_number,
  description,
  task,
  result,
  belongs,
  tableData,
}) => {
  const [query, setQuery] = useState("");
  const [allData, setAllData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [smiley, setSmiley] = useState("");
  const [primaryKey, setPrimaryKey] = useState([]);

  useEffect(() => {
    const getdata = () => {
      setPrimaryKey(tableData.filter((el) => el.Key === "PRI"));
    };
    getdata();
  }, [tableData]);
  const submitSql = async () => {
    const response = await fetch("api/getdata", {
      method: "POST",
      body: JSON.stringify({ query: query }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    setColumns(Object.keys(data.results[0]));
    setAllData(data.results);

    const response2 = await fetch("api/checkdata", {
      method: "POST",
      body: JSON.stringify({
        query: query,
        priKey: primaryKey[0].Field,
        //need to somehow send the tables primary key
        solution: `${result}`,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(primaryKey[0].Field);
    const data2 = await response2.json();
    if (data2.results.length === 0) {
      setSmiley("😀");
    } else {
      setSmiley("");
    }
  };
  return (
    <Exercise_style>
      <h2>{title}</h2>
      <hr />
      <div className="exercise">
        <div className="left-side">
          <h1>
            {serial_number}. {smiley}
          </h1>
          <p>{description}</p>
          <p>{task}</p>
          <textarea
            id="basic_query"
            name="query"
            rows={4}
            cols={50}
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />

          <div className="buttons">
            <button onClick={submitSql} className="submit-button">
              Submit sql
            </button>
            <button className="default">Restore default</button>
          </div>
        </div>
        <div className="result">
          <h1>Result:</h1>
          <hr />
          <table>
            <thead>
              <tr>
                {columns.map((column) => {
                  return <th key={column}>{column}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {allData.map((row, i) => {
                return (
                  <tr key={i}>
                    {columns.map((column, i) => {
                      return <td key={column}>{row[column]}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Exercise_style>
  );
};

export default Exercise;
