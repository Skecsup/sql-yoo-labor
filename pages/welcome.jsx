import React, { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useAppContext } from "../context/appContext";
const Welcome = () => {
  const router = useRouter();
  const [newTable, setNewTable] = useState("");
  const [newTask, setNewTask] = useState({
    TaskDescription: "",
    Task: "",
    Title: "",
    Solution: "",
    BelongsTo: "",
  });
  const { tables, tableData, fetchTableData } = useAppContext();

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

  const logout = () => {
    Cookies.remove("loggedin");
    router.push("/");
  };
  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={logout}>logout</button>

      <select
        onChange={(e) => setNewTask({ ...newTask, BelongsTo: e.target.value })}
      >
        <option disabled selected value>
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
          <div>
            <label htmlFor="">Title</label>
            <input
              onChange={(e) =>
                setNewTask({ ...newTask, Title: e.target.value })
              }
              type="text"
            />
          </div>
          <div>
            <label htmlFor="">Description</label>
            <input
              onChange={(e) =>
                setNewTask({ ...newTask, TaskDescription: e.target.value })
              }
              type="text"
            />
          </div>
          <div>
            <label htmlFor="">Task</label>
            <input
              onChange={(e) => setNewTask({ ...newTask, Task: e.target.value })}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="">Solution</label>
            <input
              onChange={(e) =>
                setNewTask({ ...newTask, Solution: e.target.value })
              }
              type="text"
            />
          </div>
          <button type="submit">Create task</button>
        </form>
      </div>
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
  );
};

export default Welcome;
