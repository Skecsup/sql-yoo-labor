import Cookies from "js-cookie";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/appContext";
import { Navbar_style, Styled_Navbar_Button } from "../styles/Navbar.style";

const Navbar = ({ children }) => {
  const { tables, cookieState } = useAppContext();

  console.log(tables);
  return (
    <Navbar_style>
      <div className="left-column">
        <Link href={"/"}>
          <h1>SQLYOO</h1>
        </Link>

        <div className="tables">
          {tables.map((table, i) => {
            return (
              <div key={i}>
                <Link href={`/${table.Tables_in_world}`}>
                  {table.Tables_in_world.length < 10
                    ? table.Tables_in_world
                    : table.Tables_in_world.slice(0, 10).concat("...")}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="nav-container-inner">
        <div className="top-row">
          <Link href={cookieState ? "/welcome" : "/login"}>
            <Styled_Navbar_Button>
              {cookieState ? "Create tasks" : "Log in"}
            </Styled_Navbar_Button>
          </Link>
        </div>
        <div className="content">{children}</div>
      </div>
    </Navbar_style>
  );
};

export default Navbar;
