import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  let activeStyle = {
    borderBottom: "2px solid #ffffff",
    borderRadius: "7px",
  };

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-40 bg-primary text-neutral">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/dashboard"
            >
              Admin Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="allBlogs"
            >
              User blogs
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
