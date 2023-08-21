import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Cart from "./Cart";
const Route = () => {
  const Applayout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout/>,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "Contact",
          element: <Contact />,
        },
        {
          path: "About",
          element: <About />,
        },
        {
          path: "cart",
          element: <Cart/>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Route;
