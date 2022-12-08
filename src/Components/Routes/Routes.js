import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import History from "../History/History";
import Home from "../Home/Home";
import Main from "../Main/Main";

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
        path: "/history",
        element: <History />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default routes;
