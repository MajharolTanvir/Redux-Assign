import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
const Navbar = () => {
  let activeStyle = {
    borderBottom: "2px solid #ffffff",
    borderRadius: "7px",
  };

  const { pathname } = useLocation();

  return (
    <nav className="navbar bg-primary text-neutral">
      <div className="flex-1">
        <NavLink to="/" className="btn btn-ghost normal-case text-xl">
          FreeBlogs
        </NavLink>
      </div>
      <div className="flex-none hidden md:block">
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
      {pathname === "/dashboard" && (
        <div>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            <BiMenu />
          </label>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
