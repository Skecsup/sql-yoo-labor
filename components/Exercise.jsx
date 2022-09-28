import { useState } from "react";
import { Exercise_style } from "../styles/Exercise.style";

const Exercise = ({ title, serial_number, description, task }) => {
  const [query, setQuery] = useState("");
  const [allData, setAllData] = useState([]);
  const [columns, setColumns] = useState([]);
  const submitSql = async () => {
    const response = await fetch("api/getdata", {
      method: "POST",
      body: JSON.stringify({ query }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    console.log(Object.keys(data.results[0]));
    setColumns(Object.keys(data.results[0]));
    setAllData(data.results);
  };
  return (
    <Exercise_style>
      <h2>{title}</h2>
      <hr />
      <div className="exercise">
        <div className="left-side">
          <h1>{serial_number}.</h1>
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
          {/* <textarea rows={4} cols={50}></textarea> */}
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
          {/* {allData.map((row) => {
            return (
              <div key={row.name}>
                {columns.map((column) => {
                  return row[column] + " ";
                })}
              </div>
            );
          })} */}
        </div>
      </div>
    </Exercise_style>
  );
};

export default Exercise;
