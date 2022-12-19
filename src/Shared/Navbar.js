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
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
          >
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/history"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                History
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost normal-case text-xl">
          FreeBlogs
        </NavLink>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/history"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              History
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Dashboard
            </NavLink>
          </li>
        </ul>
      </div>
      {pathname === "/dashboard" && (
        <div className="navbar-end lg:hidden">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden text-2xl"
          >
            <BiMenu />
          </label>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
