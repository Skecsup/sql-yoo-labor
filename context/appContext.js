import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [tables, setTables] = useState([]);
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("api/gettables");
      const data = await response.json();

      setTables(
        data.results.filter(
          (table) =>
            table.Tables_in_world !== "tasks" &&
            table.Tables_in_world !== "users"
        )
      );
    };
    fetchData();
  }, []);
  const fetchTableData = async (tableId) => {
    const response = await fetch("api/gettabledata", {
      method: "POST",
      body: JSON.stringify({ tableName: tableId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setTableData(data.results);
  };
  const context = {
    tables,
    tableData,
    fetchTableData,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
