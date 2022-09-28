import Link from "next/link";
import React from "react";
import { Navbar_style } from "../styles/Navbar.style";

const Navbar = ({ children }) => {
  return (
    <Navbar_style>
      <div className="nav-container">
        <div className="left-column">
          <h1>
            <Link href={"/"}>SQLYOO</Link>
          </h1>
        </div>
        <div className="nav-container-inner">
          <div className="top-row"></div>
          <div className="content">{children}</div>
        </div>
      </div>
    </Navbar_style>
  );
};

export default Navbar;
