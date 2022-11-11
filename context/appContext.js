import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const router = useRouter();
  const [tables, setTables] = useState([]);
  const [tableData, setTableData] = useState([]);

  const [cookieState, setCookieState] = useState(false);
  useEffect(() => {
    setCookieState(Cookies.get("loggedin"));
  }, [cookieState]);

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

  const loginHandler = async (e, name, password) => {
    e.preventDefault();
    const response = await fetch("api/login", {
      method: "POST",
      body: JSON.stringify({ name: name, password: password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data.route === "/welcome") {
      Cookies.set("loggedin", "true");
      setCookieState(Cookies.get("loggedin"));
    }
    router.push(data.route);
  };
  const logoutHandler = () => {
    Cookies.remove("loggedin");
    setCookieState(false);
    router.push("/");
  };

  const context = {
    tables,
    tableData,
    fetchTableData,
    loginHandler,
    logoutHandler,
    cookieState,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
