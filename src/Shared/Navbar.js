import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  let activeStyle = {
    borderBottom: "2px solid #ffffff",
    borderRadius: "7px",
  };

  return (
    <nav className="navbar bg-primary text-neutral">
      <div className="flex-1">
        <NavLink to="/" className="btn btn-ghost normal-case text-xl">
          daisyUI
        </NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/history"
            >
              History
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
