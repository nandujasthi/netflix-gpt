import React from "react";
import Login from "./Login.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse.js";

const Body = () => {
  const AppRoute = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={AppRoute} />
    </div>
  );
};

export default Body;
