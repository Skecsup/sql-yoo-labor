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
  const [showAnswer, setShowAnswer] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState([]);
  const [correctColumns, setCorrectColumns] = useState([]);
  const [extraLogicValue, setExtraLogicValue] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const showCorrectAnswer = async () => {
    setShowAnswer(!showAnswer);
  };

  const restoreToDefault = () => {
    setQuery("");
    setAllData([]);
    setColumns([]);
    setSmiley("");
    setShowAnswer(false);
    setCorrectAnswer([]);
    setCorrectColumns([]);
    setExtraLogicValue(false);
  };

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
    try {
      setAllData(data.results);
      if (data.results.length > 0) {
        setColumns(Object.keys(data.results[0]));
      }
      setErrorMessage("");
    } catch {
      setErrorMessage(data.err.sqlMessage);
      setColumns([]);
      setAllData([]);
    }

    const response3 = await fetch("api/getdata", {
      method: "POST",
      body: JSON.stringify({ query: result }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data3 = await response3.json();
    setCorrectColumns(Object.keys(data3.results[0]));
    setCorrectAnswer(data3.results);

    // const response2 = await fetch("api/checkdata", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     query: query,
    //     priKey: primaryKey[0].Field,
    //     //need to somehow send the tables primary key
    //     solution: `${result}`,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // console.log(primaryKey[0].Field);
    // const data2 = await response2.json();

    setExtraLogicValue(true);
  };

  useEffect(() => {
    if (
      JSON.stringify(correctColumns) !== JSON.stringify([]) &&
      JSON.stringify(correctColumns) === JSON.stringify(columns) &&
      JSON.stringify(correctAnswer) === JSON.stringify(allData)
    ) {
      setSmiley("😀");
    } else {
      setSmiley("");
    }
  }, [allData, columns, correctAnswer, correctColumns]);

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
          <p className="bold">{task}</p>
          <textarea
            id="basic_query"
            name="query"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />

          <div className="buttons">
            <button onClick={submitSql} className="submit-button">
              Submit sql
            </button>
            <button onClick={restoreToDefault} className="default">
              Restore default
            </button>
          </div>
        </div>
        <div className="result">
          <h2>
            {smiley === "😀"
              ? "Correct answer"
              : errorMessage !== ""
              ? "Error:"
              : extraLogicValue
              ? "Wrong answer. Some of the data is incorrect."
              : "Result:"}
          </h2>
          <hr />
          {errorMessage !== "" ? (
            <p>{errorMessage}</p>
          ) : (
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
          )}
          {extraLogicValue && smiley === "" && (
            <div>
              <button onClick={showCorrectAnswer}>Correct answer</button>
              {showAnswer && (
                <table>
                  <thead>
                    <tr>
                      {correctColumns.map((column) => {
                        return <th key={column}>{column}</th>;
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {correctAnswer.map((row, i) => {
                      return (
                        <tr key={i}>
                          {correctColumns.map((column, i) => {
                            return <td key={column}>{row[column]}</td>;
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
          )}
        </div>
      </div>
    </Exercise_style>
  );
};

export default Exercise;
