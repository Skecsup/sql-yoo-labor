import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/appContext";
import { Navbar_style } from "../styles/Navbar.style";

const Navbar = ({ children }) => {
  const { tables } = useAppContext();

  console.log(tables);
  return (
    <Navbar_style>
      <div className="nav-container">
        <div className="left-column">
          <h1>
            <Link href={"/"}>SQLYOO</Link>
          </h1>
          <div className="tables">
            {tables.map((table, i) => {
              return (
                <div key={i}>
                  <Link href={`/${table.Tables_in_world}`}>
                    {table.Tables_in_world}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="nav-container-inner">
          <div className="top-row">
            <Link href={"/login"}>
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
