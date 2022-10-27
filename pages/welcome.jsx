import React, { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useAppContext } from "../context/appContext";
const Welcome = () => {
  const router = useRouter();
  const [currentTable, setCurrentTable] = useState("");
  const { tables, tableData, fetchTableData } = useAppContext();

  const generateTableInput = (value) => {
    fetchTableData(value);
  };

  const logout = () => {
    Cookies.remove("loggedin");
    router.push("/");
  };
  console.log(tableData);
  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={logout}>logout</button>

      <select onChange={(e) => generateTableInput(e.target.value)}>
        {tables.map((table, i) => {
          return (
            <option key={i} value={table.Tables_in_world}>
              {table.Tables_in_world}
            </option>
          );
        })}
      </select>
      <div>
        {tableData.map((col) => {
          return (
            <div key={col.Field}>
              <label>{col.Field}</label>
              <input type="text" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Welcome;
