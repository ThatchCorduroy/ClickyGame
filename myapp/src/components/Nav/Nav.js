import React from "react";
import "./Nav.css";

const Nav = ({children}) => (
  <div className="navbar navbar-default navbar-fixed-top">
    {children}
  </div>
);

export default Nav;