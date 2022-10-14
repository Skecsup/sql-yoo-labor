import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Navbar_style } from "../styles/Navbar.style";

const Navbar = ({ children }) => {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("api/gettables");
      const data = await response.json();
      setTables(data.results);
    };
    fetchData();
  }, []);
  console.log(tables);
  return (
    <Navbar_style>
      <div className="nav-container">
        <div className="left-column">
          <h1>
            <Link href={"/"}>SQLYOO</Link>
          </h1>
          <div>
            {tables.map((table, i) => {
              if (table.Tables_in_world === "tasks") {
                return;
              }
              return <p key={i}>{table.Tables_in_world}</p>;
            })}
          </div>
        </div>
        <div className="nav-container-inner">
          <div className="top-row">
            <Link href={"/create"}>
              <button>create tasks</button>
            </Link>
          </div>
          <div className="content">{children}</div>
        </div>
      </div>
    </Navbar_style>
  );
};

export default Navbar;
