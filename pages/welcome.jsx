import React, { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useAppContext } from "../context/appContext";
import { Container } from "../styles/Create.style";
const Create = () => {
  const router = useRouter();
  const [insertionTableName, setInsertionTableName] = useState("");
  const [insertionData, setInsertionData] = useState({});
  const [newTable, setNewTable] = useState("");
  const [newTask, setNewTask] = useState({
    TaskDescription: "",
    Task: "",
    Title: "",
    Solution: "",
    BelongsTo: "",
  });
  const { tables, tableData, fetchTableData } = useAppContext();

  console.log(tableData);

  const createTask = async (e) => {
    e.preventDefault();
    console.log(newTask);
    const response = await fetch("api/createtask", {
      method: "POST",
      body: JSON.stringify({
        TaskDescription: newTask.TaskDescription,
        Task: newTask.Task,
        Title: newTask.Title,
        Solution: newTask.Solution,
        BelongsTo: newTask.BelongsTo,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  const createTable = async (e) => {
    e.preventDefault();
    const response = await fetch("api/createtable", {
      method: "POST",
      body: JSON.stringify({ query: newTable }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  const insertIntoTable = async (e) => {
    e.preventDefault();
    const response = await fetch("api/insertdata", {
      method: "POST",
      body: JSON.stringify({
        tableName: insertionTableName,
        columnData: insertionData,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  const logout = () => {
    Cookies.remove("loggedin");
    router.push("/");
  };
  return (
    <Container>
      <div className="button-container">
        <button className="logout" onClick={logout}>
          logout
        </button>
      </div>
      <div className="create-container">
        <div>
          <h1>Create tasks</h1>

          <select
            defaultValue={"-- select an option --"}
            onChange={(e) =>
              setNewTask({ ...newTask, BelongsTo: e.target.value })
            }
          >
            <option disabled id="">
              {" "}
              -- select an option --{" "}
            </option>
            {tables.map((table, i) => {
              return (
                <option key={i} value={table.Tables_in_world}>
                  {table.Tables_in_world}
                </option>
              );
            })}
          </select>
          <div>
            <form onSubmit={createTask}>
              <label htmlFor="">Title</label>
              <input
                onChange={(e) =>
                  setNewTask({ ...newTask, Title: e.target.value })
                }
                type="text"
              />

              <label htmlFor="">Description</label>
              <input
                onChange={(e) =>
                  setNewTask({ ...newTask, TaskDescription: e.target.value })
                }
                type="text"
              />

              <label htmlFor="">Task</label>
              <input
                onChange={(e) =>
                  setNewTask({ ...newTask, Task: e.target.value })
                }
                type="text"
              />

              <label htmlFor="">Solution</label>
              <input
                onChange={(e) =>
                  setNewTask({ ...newTask, Solution: e.target.value })
                }
                type="text"
              />

              <button type="submit">Create task</button>
            </form>
          </div>
        </div>
        <div>
          <h1>Create table</h1>
          <form onSubmit={createTable}>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              onChange={(e) => setNewTable(e.target.value)}
            ></textarea>
            <button type="submit">create table</button>
          </form>
        </div>

        <div className="insert-container">
          <h1>Insert into table</h1>
          <select
            defaultValue={"-- select an option --"}
            onChange={(e) => {
              setInsertionData({});
              setInsertionTableName(e.target.value);
              fetchTableData(e.target.value);
            }}
          >
            <option disabled> -- select an option -- </option>
            {tables.map((table, i) => {
              return (
                <option key={i} value={table.Tables_in_world}>
                  {table.Tables_in_world}
                </option>
              );
            })}
          </select>
          <form onSubmit={insertIntoTable}>
            {tableData.map((el) => {
              return (
                <div key={el.Field}>
                  <label>{el.Field}</label>
                  <input
                    onChange={(e) =>
                      setInsertionData({
                        ...insertionData,
                        [el.Field]: e.target.value,
                      })
                    }
                    type="text"
                  />
                </div>
              );
            })}
            <button type="submit">Insert Data</button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Create;
