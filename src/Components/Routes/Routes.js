import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AllBlogs from "../Admin/AllBlogs";
import Dashboard from "../Dashboard/Dashboard";
import History from "../History/History";
import Home from "../Home/Home";
import Main from "../Main/Main";
import Blogs from "../User/Blogs";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "history",
        element: <History />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard",
            element: <AllBlogs />,
          },
          {
            path: "allBlogs",
            element: <Blogs />,
          },
        ],
      },
    ],
  },
]);

export default routes;
