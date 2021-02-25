import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div>
      <NavLink exact to="/" activeStyle={{ fontWeight: "bold" }}>
        Home
      </NavLink>
    </div>
  );
}
