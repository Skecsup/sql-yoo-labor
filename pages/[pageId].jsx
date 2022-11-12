import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Exercise from "../components/Exercise";
import { useAppContext } from "../context/appContext";
import { TableContainer } from "../styles/TablePage.style";

const TasksForTables = () => {
  const router = useRouter();
  const tableId = router.query.pageId;
  const [tasks, setTasks] = useState([]);
  const [topTableData, setTopTableData] = useState([]);

  const { fetchTableData, tableData } = useAppContext();

  useEffect(() => {
    const getTableDataForTheTopTable = async () => {
      const response = await fetch("api/getdata", {
        method: "POST",
        body: JSON.stringify({ query: `SELECT * FROM ${tableId} LIMIT 6` }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      setTopTableData(data.results);
    };
    getTableDataForTheTopTable();
  }, [tableId]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("api/gettasks");
      const data = await response.json();
      setTasks(data.results.filter((task) => task.BelongsTo === tableId));
    };
    fetchTasks();
    fetchTableData(tableId);
  }, [tableId]);
  console.log(tableData);
  return (
    <>
      <TableContainer>
        <p>{tableId}</p>
        <table>
          <thead>
            <tr>
              {tableData.map((column, i) => {
                if (i > 4) {
                  return;
                }
                return <th key={column.Field}>{column.Field}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {topTableData.map((row, i) => {
              console.log(row);
              return (
                <tr key={i}>
                  {tableData.map((column, i) => {
                    if (i > 4) return;
                    return <td key={column.Field}>{row[column.Field]}</td>;
                  })}
                </tr>
              );
            })}
            <tr>
              <td colSpan={5}>...</td>
            </tr>
          </tbody>
        </table>
      </TableContainer>
      {tasks.map((task, i) => (
        <Exercise
          title={task.Title}
          serial_number={i + 1}
          description={task.TaskDescription}
          task={task.Task}
          result={task.Solution}
          key={task.TaskID}
        />
      ))}
    </>
  );
};

export default TasksForTables;
